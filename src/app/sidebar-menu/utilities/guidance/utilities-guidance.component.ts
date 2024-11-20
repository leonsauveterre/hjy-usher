import { Component } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';
import { HighlightBreezeDirective } from './highlight-breeze.directive';

@Component({
  selector: 'app-guidance',
  standalone: true,
  imports: [
    CodeDisplayComponent,
    HighlightBreezeDirective
  ],
  templateUrl: './utilities-guidance.component.html',
  styleUrl: './utilities-guidance.component.css'
})
export class UtilitiesGuidanceComponent {

  protected presetStatements: readonly string[] = [
    // [0]
    `<div id="blog-bills-expunging-container" class="blog-container mx-auto">
  <!-- Main content goes here -->
</div>`,

    // [1]
    `<div class="blog-title">Hear Ye, Hear Ye</div>`,

    // [2]
    `<div class="blog-sub-title">Written by a lad with great ambition and intuition. Updated: moments ago</div>`,

    // [3]
    `<div class="blog-paragraph">
  <!-- Each paragraph goes here -->
</div>`,

    // [4]
    `<div class="blog-header-1">Dogs</div>
<div class="blog-header-2">Police Dogs</div>
<div class="blog-header-3">German Shepherd & Rottweiler</div>`,

    // [5]
    `<div class="blog-text-normal">McAvoy or Stewart? These timelines can get so confusing...</div>`,

    // [6]
    `<span class="blog-highlight-compact">NEW</span>
<span class="blog-highlight-canary">Inside Sabrina Carpenter's Short n&apos; Sweet LA Tour Stop: From Domingo to Xtina</span>`,

    // [7]
    `<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>What to ingest</th>
      <th>And why</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lettuce</td>
      <td>A good source of vitamins and nutrients. One cup of shredded lettuce leaves (any type) has only approximately 5 to 10 calories.</td>
    </tr>
    <tr>
      <td>Coffee</td>
      <td>With the right amount of coffee, your body may process glucose (or sugar) better, and less likely to develop heart failure.</td>
    </tr>
  </tbody>
</table>`,

    // [8]
    `<div class="blog-text-normal">With iPhone 16 Pro, you can shoot in 120 mm with the 5x Telephoto camera on both Pro models and get <span class="blog-highlight-navy">sharper close-ups from farther away</span> !</div>`,

    // [9]
    `<div class="blog-question-title">🤨 Who hears it first, dogs or cats?</div>
<div class="alert alert-success blog-question-body">🙋‍♂️ Actually, a cat's hearing is better than a dog's. Moreover, a cat can hear high-frequency sounds up to two octaves higher than a human.</div>`,

    // [10]
    `<div class="blog-header-3">Things to do today (Guess who I am)</div>
<div class="blog-text-normal">1️⃣ Head to work, school, or maintain their cover life.</div>
<div class="blog-text-normal">2️⃣ Meet with my allies to strategize and share intel.</div>
<div class="blog-text-normal">3️⃣ Spring into action when a distress signal or major threat arises.</div>`,

    // [11]
    `<app-code-display id="generate-fibonacci-sequence-up-to-n"
  code="IntStream.range(0, n).map(i -> i < 2 ? i : IntStream.range(0, i).reduce(0, (a, b) -> a + b))"
  language="java"></app-code-display>`,

    // [12]
    `<div class="mb-3 input-group">
  <div class="input-group-prepend">
    <label class="input-group-text">Who would you call in despair?</label>
  </div>
  <input type="text" class="form-control"
         placeholder="You may add multiple names separated by a comma"
         id="people-i-d-call-in-despair">
</div>`,

    // [13]
    `<div class="blog-end">(Fin)</div>
<div class="blog-end-line"></div>`,

    // [14]
    ``
  ];

}
