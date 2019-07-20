import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import '../app/js/vanilla-peity.components';
import '../app/js/litelement-peity.components';

storiesOf('Peity', module)
  .add(
    'Vanilla Pie Charts',
    () => /* html */ `
    <h2>Pie Charts</h2>

    <div>
      <vanilla-pie>1/5</vanilla-pie>
      <vanilla-pie>226/360</vanilla-pie>
      <vanilla-pie>0.52/1.561</vanilla-pie>
      <vanilla-pie>1,4</vanilla-pie>
      <vanilla-pie>226,134</vanilla-pie>
      <vanilla-pie>0.52,1.041</vanilla-pie>
      <vanilla-pie>1,2,3,2,2</vanilla-pie>
    </div>`
  )
  .add(
    'Vanilla Donut Charts',
    () => /* html */ `
    <h2>Donut Charts</h2>

    <div>
      <vanilla-donut>1/5</vanilla-donut>
      <vanilla-donut>226/360</vanilla-donut>
      <vanilla-donut>0.52/1.561</vanilla-donut>
      <vanilla-donut>1,4</vanilla-donut>
      <vanilla-donut>226,134</vanilla-donut>
      <vanilla-donut>0.52,1.041</vanilla-donut>
      <vanilla-donut>1,2,3,2,2</vanilla-donut>
    </div>`
  )
  .add(
    'Vanilla Line Charts',
    () => /* html */ `
    <h2>Line Charts</h2>

    <div>
      <vanilla-line>5,3,9,6,5,9,7,3,5,2</vanilla-line>
      <vanilla-line>5,3,2,-1,-3,-2,2,3,5,2</vanilla-line>
      <vanilla-line>0,-3,-6,-4,-5,-4,-7,-3,-5,-2</vanilla-line>
    </div>`
  )
  .add(
    'Vanilla Bar Charts',
    () => /* html */ `
    <h2>Bar Charts</h2>

    <div>
      <vanilla-bar>5,3,9,6,5,9,7,3,5,2</vanilla-bar>
      <vanilla-bar>5,3,2,-1,-3,-2,2,3,5,2</vanilla-bar>
      <vanilla-bar>0,-3,-6,-4,-5,-4,-7,-3,-5,-2</vanilla-bar>
    </div>`
  )
  .add(
    'Vanilla Attributes',
    () => /* html */ `
    <h2>Attributes</h2>

    <div>
      <vanilla-donut fill='["red", "#eeeeee"]' inner-radius="10" radius="40">1/7</vanilla-donut>
      <vanilla-donut fill='["orange", "#eeeeee"]' inner-radius="14" radius="36">2/7</vanilla-donut>
      <vanilla-donut fill='["yellow", "#eeeeee"]' inner-radius="16" radius="32">3/7</vanilla-donut>
      <vanilla-donut fill='["green", "#eeeeee"]' inner-radius="18" radius="28">4/7</vanilla-donut>
      <vanilla-donut fill='["blue", "#eeeeee"]' inner-radius="20" radius="24">5/7</vanilla-donut>
      <vanilla-donut fill='["indigo", "#eeeeee"]' inner-radius="18" radius="20">6/7</vanilla-donut>
      <vanilla-donut fill='["violet", "#eeeeee"]' inner-radius="15" radius="16">7/7</vanilla-donut>
    </div>`
  )
  .add(
    'LitElement Pie Charts',
    () => /* html */ `
    <h2>Pie Charts</h2>

    <div>
      <litelement-pie>1/5</litelement-pie>
      <litelement-pie>226/360</litelement-pie>
      <litelement-pie>0.52/1.561</litelement-pie>
      <litelement-pie>1,4</litelement-pie>
      <litelement-pie>226,134</litelement-pie>
      <litelement-pie>0.52,1.041</litelement-pie>
      <litelement-pie>1,2,3,2,2</litelement-pie>
    </div>`
  )
  .add(
    'LitElement Donut Charts',
    () => /* html */ `
    <h2>Donut Charts</h2>

    <div>
      <litelement-donut>1/5</litelement-donut>
      <litelement-donut>226/360</litelement-donut>
      <litelement-donut>0.52/1.561</litelement-donut>
      <litelement-donut>1,4</litelement-donut>
      <litelement-donut>226,134</litelement-donut>
      <litelement-donut>0.52,1.041</litelement-donut>
      <litelement-donut>1,2,3,2,2</litelement-donut>
    </div>`
  )
  .add(
    'LitElement Line Charts',
    () => /* html */ `
    <h2>Line Charts</h2>

    <div>
      <litelement-line>5,3,9,6,5,9,7,3,5,2</litelement-line>
      <litelement-line>5,3,2,-1,-3,-2,2,3,5,2</litelement-line>
      <litelement-line>0,-3,-6,-4,-5,-4,-7,-3,-5,-2</litelement-line>
    </div>`
  )
  .add(
    'LitElement Bar Charts',
    () => /* html */ `
    <h2>Bar Charts</h2>

    <div>
      <litelement-bar>5,3,9,6,5,9,7,3,5,2</litelement-bar>
      <litelement-bar>5,3,2,-1,-3,-2,2,3,5,2</litelement-bar>
      <litelement-bar>0,-3,-6,-4,-5,-4,-7,-3,-5,-2</litelement-bar>
    </div>`
  )
  .add(
    'LitElement Attributes',
    () => /* html */ `
    <h2>Attributes</h2>

    <div>
      <litelement-donut fill='["red", "#eeeeee"]' inner-radius="10" radius="40">1/7</litelement-donut>
      <litelement-donut fill='["orange", "#eeeeee"]' inner-radius="14" radius="36">2/7</litelement-donut>
      <litelement-donut fill='["yellow", "#eeeeee"]' inner-radius="16" radius="32">3/7</litelement-donut>
      <litelement-donut fill='["green", "#eeeeee"]' inner-radius="18" radius="28">4/7</litelement-donut>
      <litelement-donut fill='["blue", "#eeeeee"]' inner-radius="20" radius="24">5/7</litelement-donut>
      <litelement-donut fill='["indigo", "#eeeeee"]' inner-radius="18" radius="20">6/7</litelement-donut>
      <litelement-donut fill='["violet", "#eeeeee"]' inner-radius="15" radius="16">7/7</litelement-donut>
    </div>`
  );
