"use client";
import React, { useState } from 'react'
// import 'katex/dist/katex.min.css';
import { Button, Table } from 'react-bootstrap';
import { inline, block } from '@/app/utils/math/mathjax';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
// import { inline, block } from '../../../utils/math/latex';

// symbols
const A = inline(`A`);
const B = inline(`B`);
const E = inline(`E`);
const H = inline(`H`);
const CAP = inline(`\\cap`);

const frac = (num: string | number, denom: string | number) => {
  return inline(`\\frac{${num}}{${denom}}`);
}

const BayesianGrid = () => {
  const M = 10, N = 10;
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const toggleAnswerVisible = () => setIsAnswerVisible(!isAnswerVisible);

  const [params, setParams] = useState<{
    m0: number,
    // row1: number // not allowed to set
    n0: number,
    n1: number,
  }>({
    m0: 1,
    n0: N - 1,
    n1: 1,
  });
  const { m0, n0, n1 } = params;

  // calculations
  const pH = m0 / M;
  const pE_H = n0 / N;
  const pE_nH = n1 / N;
  const pE = pE_H * pH + pE_nH * (1 - pH);
  // const pE = ((m0 * n0) + n1 * (M - m0)) / M * N;
  const pH_E = pH * pE_H / pE;

  const sliders = (
    <ul className='p-0' style={{ listStyle: 'none' }}>
      <li>
        <input
          id="slider-m0"
          type="range"
          value={m0}
          min={1}
          max={M - 1}
          onChange={(e: { target: { value: any; }; }) => setParams({ m0: Number(e.target.value), n0, n1 })}
        />
        <label className='mx-2' htmlFor="slider-m0">Prior probability</label>
        <span> (Prevalence of disease) </span>
      </li>
      <li>
        <input type="range"
          id="slider-n0"
          value={n0}
          min={1}
          max={N - 1}
          onChange={(e: { target: { value: any; }; }) => setParams({ m0, n0: Number(e.target.value), n1 })}
        />
        <label className='mx-2' htmlFor="slider-n0">Likelihood</label>
        <span> (Sensitivity in disease testing) </span>
      </li>
      <li>
        <input type="range"
          id="slider-n1"
          value={n1}
          min={1}
          max={9}
          onChange={(e: { target: { value: any; }; }) => setParams({ m0, n0, n1: Number(e.target.value) })}
        />
        <label className='mx-2' htmlFor="slider-n1">False positive rate</label>
      </li>
    </ul>
  )
  const questionDiv = (
    <div>
      <h4>Question: </h4>
      <ol>
        <li>What is Bayes' formula?</li>
        <li>
          In the grid below, each dot represents a client. Shaded dots indicate clients who tested positive. {H} (or red dots) indicates infected clients.
        </li>
        <li>
          From the grid, identify and calculate the following:
          <ul>
            <li>Prior probability</li>
            <li>Likelihood</li>
            <li>False positive rate</li>
            <li>Marginal Likelihood</li>
            <li>Posterior probability</li>
          </ul>
        </li>
        <li>
          Verify your result with the Bayes' formula.
        </li>
      </ol>
    </div>
  );

  const answerDiv = (
    <div>
      <Button onClick={toggleAnswerVisible}>Answer</Button>
      {isAnswerVisible &&
        <div>
          <p>Prior probability: {inline(`P(H) = ${pH * 100}\\%`)} (Height of {H} over total = {frac(m0, M)})</p>
          <p>Likelihood {inline(`P(E|H) = ${pE_H * 100} \\%`)} (In rows of {H}, shaded area over total = {frac(n0, N)}) </p>
          <p>False positive rate {inline(` = ${pE_nH * 100} \\%`)} (In rows of {inline(`\\neg H`)}, shaded area over all = {frac(n1, N)}) </p>
          <p>Marginal likelihood {inline(` = ${(pE * 100).toFixed(2)} \\%`)} (Shaded area / Total #Grids = {frac(m0 * n0 + n1 * (M - m0), M * N)})</p>
          <p>Posterior probability {inline(` = ${(pH_E * 100).toFixed(2)} \\%`)} (Shaded area in H / shaded area = {frac(m0 * n0, m0 * n0 + n1 * (M - m0))})</p>
        </div>
      }
    </div>
  );

  const Cell = (props: { row: number, col: number }) => {
    const { row, col } = props;
    const r =
      (row < m0 && col < n0) ? 0 :
        (row < m0 && col >= n0) ? 1 :
          (row >= m0 && col < n1) ? 2 :
            (row >= m0 && col >= n1) ? 3 :
              3;
    const icons = [
      // '🔵', '🔴',
      // '⚫', '🟢',
      '🔴', '🔴',
      '🟢', '🟢',
    ];
    const backgrounds = [
      '#bbb', 'inherit',
      '#ddd', 'inherit',
    ];

    return (
      <td
        key={col}
        className='text-center align-middle'
        style={{
          border: '1px solid black',
          // cursor: 'pointer',
          background: `${backgrounds[r]}`,
        }}
      >
        <span role="img" aria-label="icon">{icons[r]}</span>
      </td>
    );
  };

  return (
    <div>
      <h2>Interactive Bayesian Grid</h2>
      {sliders}
      {questionDiv}
      <Table bordered>
        <thead>
        </thead>
        <tbody>
          {Array.from({ length: M }).map((_, i) => (
            <tr key={i}>
              {i === 0 ? <th rowSpan={m0} className="text-center align-middle py-0">{inline('H')}</th> : (
                i === m0 ? <th rowSpan={M - m0} className="text-center align-middle py-0">{inline('\\neg H')}</th> : ''
              )}
              {Array.from({ length: N }).map((_, j) => <Cell key={j} row={i} col={j} />)}
            </tr>
          ))}
        </tbody>
      </Table>
      {answerDiv}
    </div>
  );
}

const Bayesian = () => {
  return (
    <MathJaxContext>
      <div>
        <h1>Bayes' Theorem and Bayesian Inference</h1>
        <div>
          <BayesianGrid />
        </div>

        <div>
          <h2>Explanations</h2>
          <p>The best way to memorize Bayes' Theorem is by rearranging terms from the definition of conditional probability.</p>
          <p>Always remember</p>
          {block(`P(A|B) = \\frac{P(A \\cap B)}{P(B)}`)}
          <p>This definition allows us to "split" the {CAP} to either condition {A} or {B}</p>
          {block(`P(A \\cap B) = P(A|B)P(B)`)}
          {block(`P(A \\cap B) = P(B|A)P(A)`)}
          <p>Using the above properties on {H} and {E}:</p>
          {block(`
          \\begin{aligned} 
            P(H|E) &= \\frac{P(H \\cap E)}{P(E)} \\\\ 
                  &= \\frac{P(E|H) \\cdot P(H)}{P(E)} \\\\ 
          \\end{aligned}
        `)}
          <p>Or:</p>
          {block(`P(H|E) = P(H) \\cdot \\frac{P(E|H)}{P(E)}`)}
          <p>This theorem allows us to:</p>
          <ul>
            <li>flip {inline(`P(H|E)`)} to {inline(`P(E|H)`)}, which is usually easier to find.</li>
            <li>"update" the probability of a hypothesis from new evidence, if you think of {H} as the Hypothesis we want to prove, and {E} as the Evidence we obtained.</li>
          </ul>
        </div>

        <div>
          <h2>Example: Patient Testing Positive for a Disease</h2>
          <p>A patient is going to have a test of a certain disease.</p>
          <ul>
            <li>{H}ypothesis: The patient has a disease.</li>
            <li>{E}vidence: The patient is tested positive.</li>
          </ul>
          <p>Let's assume:</p>
          <ul>
            <li>{inline(`P(H) = 1\\%`)} (1% prevalence). The probability of hypothesis prior to evidence, or **prior probability**, or just **prior**.</li>
            <li>{inline(`P(E|H) = 98\\%`)} (98% sensitivity). The probability of evidence given that the hypothesis is true, which is called the **likelihood**</li>
            <li>{inline(`P(E|\\neg H) = 5\\%`)} (5% false positive rate). The probability of evidence given that the hypothesis is wrong. It is the **false positive rate**.
            </li>
          </ul>
          <p>The **posterior (probability)**, {inline(`P(H|E)`)}, which is the probability of hypothesis posterior to evidence, is given by:</p>
          {block(`P(H|E) = P(H) \\cdot \\frac{P(E|H)}{P(E)}`)}
          <p>Note that to calculate {inline('P(E)')}, the **marginal likelihood**, we need to split into 2 (or more, depending on the question) cases, either H is true or false, and add up the probabilities.</p>

          {block(`
          \\begin{aligned}
            P(H|E) &= P(H) \\cdot \\frac{P(E|H)}{P(E|H) \\cdot P(H) + P(E|\\neg H) \\cdot P(\\neg H)} \\\\
                  &= 1\\% \\cdot \\frac{98\\%}{98\\% \\cdot 1\\% + 5\\% \\cdot 99\\%} \\\\
                  &\\approx 1\\% \\cdot 16.53 \\\\
                  &\\approx 16.53\\%
          \\end{aligned}
        `)}
          <p>So, given a positive test result, the probability of having the disease is approximately 16.53%.</p>
          <p>This is very counter-intuitive. You are tested positive, but the chance of having the disease is only 16.53%! Why is that?</p>
          <p>The reason is that the prior probability {inline('P(H) = 1\\%')} of the hypothesis, or the **base rate**, is actually very low here. Our evidence increased it to {inline('16.53')} times, but it is still low.</p>
          <p>Failing to consider the base rate is called the **base rate fallacy**. This is a very common cognitive bias because, while the probabilities are hard to calculate, "how representative is this event of the hypothesis" is much easier to answer, and we humans are likely to switch to an easier question unconsciously. It is related to a concept called the **representativeness heuristic**.</p>
        </div>
      </div>
    </MathJaxContext>
  );
};


export default Bayesian;