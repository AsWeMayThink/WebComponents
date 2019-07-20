import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import '../app/js/peity.components';

storiesOf('Peity', module)
  .add(
    'Pie Charts',
    () => /* html */ `
    <h2>Pie Charts</h2>

    <div>
      <wc-pie>1/5</wc-pie>
      <wc-pie>226/360</wc-pie>
      <wc-pie>0.52/1.561</wc-pie>
      <wc-pie>1,4</wc-pie>
      <wc-pie>226,134</wc-pie>
      <wc-pie>0.52,1.041</wc-pie>
      <wc-pie>1,2,3,2,2</wc-pie>
    </div>`
  )
  .add(
    'Donut Charts',
    () => /* html */ `
    <h2>Donut Charts</h2>

    <div>
      <wc-donut>1/5</wc-donut>
      <wc-donut>226/360</wc-donut>
      <wc-donut>0.52/1.561</wc-donut>
      <wc-donut>1,4</wc-donut>
      <wc-donut>226,134</wc-donut>
      <wc-donut>0.52,1.041</wc-donut>
      <wc-donut>1,2,3,2,2</wc-donut>
    </div>`
  )
  .add(
    'Line Charts',
    () => /* html */ `
    <h2>Line Charts</h2>

    <div>
      <wc-line>5,3,9,6,5,9,7,3,5,2</wc-line>
      <wc-line>5,3,2,-1,-3,-2,2,3,5,2</wc-line>
      <wc-line>0,-3,-6,-4,-5,-4,-7,-3,-5,-2</wc-line>
    </div>`
  )
  .add(
    'Bar Charts',
    () => /* html */ `
    <h2>Bar Charts</h2>

    <div>
      <wc-bar>5,3,9,6,5,9,7,3,5,2</wc-bar>
      <wc-bar>5,3,2,-1,-3,-2,2,3,5,2</wc-bar>
      <wc-bar>0,-3,-6,-4,-5,-4,-7,-3,-5,-2</wc-bar>
    </div>`
  )
  .add(
    'Attributes',
    () => /* html */ `
    <h2>Attributes</h2>

    <div>
      <wc-donut fill='["red", "#eeeeee"]' inner-radius="10" radius="40">1/7</wc-donut>
      <wc-donut fill='["orange", "#eeeeee"]' inner-radius="14" radius="36">2/7</wc-donut>
      <wc-donut fill='["yellow", "#eeeeee"]' inner-radius="16" radius="32">3/7</wc-donut>
      <wc-donut fill='["green", "#eeeeee"]' inner-radius="18" radius="28">4/7</wc-donut>
      <wc-donut fill='["blue", "#eeeeee"]' inner-radius="20" radius="24">5/7</wc-donut>
      <wc-donut fill='["indigo", "#eeeeee"]' inner-radius="18" radius="20">6/7</wc-donut>
      <wc-donut fill='["violet", "#eeeeee"]' inner-radius="15" radius="16">7/7</wc-donut>
    </div>`
  );
