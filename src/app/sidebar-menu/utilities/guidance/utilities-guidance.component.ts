import { Component } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';
import { HighlightBreezeDirective } from './highlight-breeze.directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
<div class="blog-end-line"></div>`
  ];

  protected moliereSourceCode: SafeHtml;
  protected readonly moliereSourceCodeRaw: string = `<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">Home</li>
    <li class="breadcrumb-item">Blog Styling Recommendations</li>
    <li class="breadcrumb-item active" aria-current="page">Molière</li>
  </ol>
</nav>
<div id="moliere-container" class="blog-container mx-auto">
  <div class="blog-title">MOLIÈRE L'OPÉRA URBAIN</div>
  <div class="blog-sub-title">A Musical Journey through Classic French Literature · Leon Zhao · Moments ago</div>
  <div class="blog-paragraph">
    <div class="blog-header-1">Introduction</div>
    <div class="blog-header-2">1.1 What is Molière L'Opéra Urbain?</div>
    <div class="blog-text-normal">A unique reinterpretation of Molière's works brought to life with a vibrant blend of urban musical styles, showcasing timeless tales through contemporary rhythms and storytelling.</div>
    <div class="blog-header-2">1.2 Highlights of the Musical</div>
    <div class="blog-text-normal">1️⃣ Dynamic fusions of French rap, pop, and classical melodies.</div>
    <div class="blog-text-normal">2️⃣ Performances inspired by Molière's renowned plays: Le Misanthrope, L’Avare, and Tartuffe.</div>
    <div class="blog-text-normal">3️⃣ A multicultural cast embodying the universality of Molière's themes.</div>
  </div>
  <div class="blog-paragraph">
    <div class="blog-header-1">Musical Numbers</div>
    <div class="blog-text-normal">
      <span class="blog-highlight-compact">💽 Spotify</span>
      <span class="blog-highlight-canary" onclick="window.open('https://open.spotify.com/intl-fr/album/6ISb3wobXqDACYpA9QARal', '_blank')" style="text-decoration: underline; cursor: pointer;">Molière l'Opéra Urbain Soundtracks</span>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#️⃣</th><th>Song Title</th><th>Artists</th><th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>01</td><td>Rêver j'en ai l'habitude</td><td>La troupe Molière l'opéra urbain</td><td>3:15</td></tr>
        <tr><td>02</td><td>À quoi ça rime</td><td>Morgan, PETiTOM</td><td>2:36</td></tr>
        <tr><td>03</td><td>On se moque</td><td>Lou, PETiTOM</td><td>2:51</td></tr>
        <tr><td>04</td><td>Et si c'était nous deux ?</td><td>Shaïna Pronzola, Vike</td><td>3:05</td></tr>
        <tr><td>05</td><td>Regardez-moi</td><td>Abi Bernadoth</td><td>3:00</td></tr>
        <tr><td>06</td><td>Moi je veux</td><td>Shaïna Pronzola</td><td>3:00</td></tr>
        <tr><td>07</td><td>Tu finiras par tomber</td><td>Vike</td><td>2:54</td></tr>
        <tr><td>08</td><td>C'est la vie qui m'a fait</td><td>Abi Bernadoth</td><td>2:46</td></tr>
        <tr><td>09</td><td>Aujourd'hui tout va bien</td><td>Lou, PETiTOM, Vike</td><td>2:59</td></tr>
        <tr><td>10</td><td>L'amour dont elle m'a privé</td><td>Morgan, Lou</td><td>2:29</td></tr>
        <tr><td>11</td><td>T'aimer est une galère</td><td>PETiTOM</td><td>2:43</td></tr>
        <tr><td>12</td><td>L'ivresse de la vie</td><td>Morgan, Vike</td><td>2:34</td></tr>
        <tr><td>13</td><td>En aparté</td><td>Lou, PETiTOM</td><td>2:57</td></tr>
        <tr><td>14</td><td>Demander pardon</td><td>PETiTOM, David Alexis</td><td>2:35</td></tr>
        <tr><td>15</td><td>Ne dis rien</td><td>Shaïna Pronzola</td><td>2:41</td></tr>
        <tr><td>16</td><td>Je m'appelle Jean-Baptiste</td><td>PETiTOM</td><td>2:07</td></tr>
      </tbody>
    </table>
  </div>
  <div class="blog-paragraph">
    <div class="blog-header-1">Frequently Asked</div>
    <div class="blog-question-title">🤨 How to understand Molière's relevance today?</div>
    <div class="alert alert-success blog-question-body">🙋‍♂️ Fans of classical literature, lovers of experimental theater, and anyone intrigued by a fresh take on timeless narratives are the target autidence for this opera. Molière's exploration of human vices, such as hypocrisy, greed, and vanity, resonates universally, transcending time and culture. The energetic beats and lyrical intensity of urban music amplify Molière's dramatic emotions, making the themes relatable for contemporary audiences.</div>
  </div>
</div>
<div class="blog-end">(That's all. Thank you for reading.)</div>
<div class="blog-end-line"></div>`;

  constructor(private sanitizer: DomSanitizer) {
    this.moliereSourceCode = this.sanitizer.bypassSecurityTrustHtml(this.moliereSourceCodeRaw);
  }

  scrollToExample = (): void => {
    const target = document.getElementById('prv-example');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
}
