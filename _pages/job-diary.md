---
layout: page
permalink: /job-diary/
title: job diary
nav: false
description: A diary tracking my job search.
toc:
  sidebar: left
giscus_comments: true
---

I'm graduating with my PhD in May 2026 and looking for what comes next. This diary is an honest, ongoing record of the process: the applications, the waiting, the small wins, the anxiety, and everything in between.

I'm sharing it publicly because job searching can feel isolating, and I hope reading about someone else's experience might help if you're going through something similar.

---

## Feb 22, 2026 

Finding a job in the LLM/AI alignment field as a PhD student is super challenging. Working on finetuning LLMs taught me how important engineering skills are in AI safety research: building efficient architectures to speed up experiments, increasing the number of iterations, diagnosing unexpected crashes and failure modes. For a role that leans heavily on engineering, what comparative advantage do I have over college grads with a CS degree, or someone without a graduate degree but with many years of engineering experience?

I spent my first three years learning the "math": probability, statistical inference, Bayesian statistics, some coding classes. Most of my courses were heavily mathematical but not related to LLMs at all (even the machine learning classes were very classical ML, with the exception of maybe one NLP course I took at MIT).

My first dissertation project had nothing to do with LLMs. The second one tried to bridge the gap by introducing the doubly robust estimator in the value function for tree search, but it still wasn't on the core algorithms of LLMs themselves.

Then I joined a reading seminar on AI safety in the summer of 2024, and it intrigued me when I found out that causality can be used in mechanistic interpretability. But it wasn't until the summer of 2025 that I really got firsthand experience with AI alignment research through the [MARS program](https://www.cambridgeaisafety.org/mars-old).

When I open LinkedIn job recommendations, I see roles related to LLMs in pre-training, post-training, alignment, evals, and more. From FAANG, the top tier labs (OpenAI, Anthropic, Google DeepMind), to tons of startups founded by CS undergrads. People told me I just need to apply everywhere, that it's just a _numbers_ game. But since January, when I officially started applying, it has been a battle between: 1) applying selectively vs. casting a wide net to see what sticks; 2) managing timelines for different kinds of interviews (LeetCode style, ML coding, or something completely specific to a company's problems); and 3) most importantly, the mental strength to keep it together through rejections across N rounds of interviews, the unknown unknowns, and the fact that your peers found jobs in consulting relatively easily without going through endless rounds of interviews.

It's a bit overwhelming to find my place. So here I'm dumping my random thoughts to: 1) clarify my thinking; 2) log my progress on the job search; and 3) hopefully make someone in a similar situation feel a little less alone when they read these :)

---

**Logs**

- **Small win**: Completed the exercises in tiny_llm [sampler.py](https://github.com/skyzh/tiny-llm/blob/main/src/tiny_llm/sampler.py), where I wrote temperature sampling (greedy), top-k sampling, and top-p (nucleus) sampling from scratch. Learned the tradeoffs, and caught some bugs along the way.
- **Interpersonal**: Caught up with a friend over brunch. He might have noticed I'm not very responsive lately since I'm in full interview preparation mode.
- **Looking forward to next week**: Learning key algorithms for serving LLM models efficiently, e.g. key value cache, implementing a quantized matmul kernel, implementing chunked prefill and continuous batching.

---
