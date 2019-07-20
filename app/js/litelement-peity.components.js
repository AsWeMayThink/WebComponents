import { LitElement, html } from 'lit-element';
import * as d3 from 'd3';

class BaseElement extends LitElement {
  constructor(delimiter) {
    super();

    this.delimiter = delimiter;
    this.data = this._parseData(this.innerHTML);
  }

  _parseData(value) {
    // Process the data to get an array of numbers. There may be two items
    // or many.
    let temp = value.split(this.delimiter).map(val => parseFloat(val, 10));

    // If that didn't result in multiple values, parse again using /
    // as our delimiter and expect only two values.
    if (temp.length === 1) {
      temp = value.split('/');

      // Create an array with two values. For example, if our two values were
      // "1/7", then we create an array with [ 1/7, 6/7 ]. That gives us two
      // data parts which make up a very simple pie or donut chart.
      if (temp.length === 2) {
        return [temp[0] / temp[1], (temp[1] - temp[0]) / temp[1]];
      }
    } else {
      return temp;
    }
  }
}

class LitElementPieElement extends BaseElement {
  static get properties() {
    return {
      data: Array,
      delimiter: String,
      fill: {
        converter: {
          fromAttribute: value => {
            console.log(value);
            return JSON.parse(value);
          }
        }
      },
      height: Number,
      innerRadius: Number,
      radius: Number,
      width: Number
    };
  }

  constructor() {
    super(',');

    this.fill = ['#ff9900', '#fff4dd', '#ffd592'];
    this.innerRadius = 0;
    this.radius = 8;
  }

  get width() {
    return this.radius * 2;
  }

  get height() {
    return this.radius * 2;
  }

  render() {
    if (this.data && this.data.length) {
      let height = this.height !== undefined ? this.height : this.radius * 2;
      let width = this.width !== undefined ? this.width : this.radius * 2;

      this.shadowRoot.innerHTML = `<svg width="${width}" height="${height}"></svg>`;

      let svg = d3.select(this.shadowRoot).select('svg'),
        g = svg
          .append('g')
          .attr('transform', `translate(${this.radius},${this.radius})`);

      var pie = d3.pie().sort(null);

      var path = d3
        .arc()
        .outerRadius(this.radius)
        .innerRadius(this.innerRadius);

      let data = this.data;

      var color = d3
        .scaleLinear()
        .domain([0, data.length - 1])
        .range(this.fill);

      // Selects all the arcs in the graph and syncs them up with
      // the data for the various slices.
      var arc = g
        .selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

      arc
        .append('path')
        .attr('d', path)
        .attr('fill', function(d) {
          return color(d.index);
        });
    }
  }
}

class LitElementDonutElement extends LitElementPieElement {
  static get properties() {
    return Object.assign({}, LitElementPieElement.properties, {
      innerRadius: {
        type: Number,
        attribute: 'inner-radius'
      }
    });
  }

  constructor() {
    super();

    this.innerRadius = 4;
  }
}

class LitElementLineElement extends BaseElement {
  static get properties() {
    return {
      data: Array,
      delimiter: String,
      fill: Array,
      height: Number,
      max: Number,
      min: Number,
      stroke: String,
      strokeWidth: Number,
      width: Number
    };
  }

  constructor() {
    super(',');

    this.fill = ['#c6d9fd'];
    this.height = 16;
    this.min = 0;
    this.stroke = '#4d89f9';
    this.strokeWidth = 1;
    this.width = 32;
  }

  render() {
    if (this.data && this.data.length) {
      this.shadowRoot.innerHTML = `<svg width="${this.width}" height="${
        this.height
      }"></svg>`;

      d3.select(this.shadowRoot).select('svg');
    }
  }
}

class LitElementBarElement extends BaseElement {
  static get properties() {
    return {
      data: Array,
      delimiter: String,
      fill: Array,
      height: Number,
      max: Number,
      min: Number,
      padding: Number,
      width: Number
    };
  }

  constructor() {
    super(',');

    this.fill = ['#4d89f9'];
    this.height = 16;
    this.min = 0;
    this.padding = 0.1;
    this.width = 32;
  }

  render() {
    if (this.data && this.data.length) {
      this.shadowRoot.innerHTML = `<svg width="${this.width}" height="${
        this.height
      }"></svg>`;

      // Based upon the number of data points and the padding between bars,
      // calculate bar width.
      let barWidth =
        (this.width - (this.data.length - 1) * 0.7) / this.data.length;

      var x = d3
        .scaleLinear()
        .domain([0, this.data.length - 1])
        .range([0, (this.data.length - 1) * (barWidth + 0.7)]);

      var y = d3
        .scaleLinear()
        .domain([Math.min(this.min, d3.min(this.data)), d3.max(this.data)])
        .range([this.height, 0]);

      // This chart draws from the y-axis upwards for positive values and from the
      // y-axis downwards for negative values.
      d3.select(this.shadowRoot)
        .select('svg')
        .selectAll('rect')
        .data(this.data)
        .enter()
        .append('rect')
        .attr('fill', this.fill[0])
        .attr('x', (d, i) => x(i))
        .attr('y', d => (d < 0 ? y(0) : y(d)))
        .attr('width', barWidth)
        .attr('height', d => (d < 0 ? y(d) - y(0) : y(0) - y(d)));
    }
  }
}

// Register all of the custom elements for which we created classes.
customElements.define('litelement-pie', LitElementPieElement);
customElements.define('litelement-donut', LitElementDonutElement);
customElements.define('litelement-line', LitElementLineElement);
customElements.define('litelement-bar', LitElementBarElement);
