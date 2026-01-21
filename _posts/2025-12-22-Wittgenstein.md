---
layout: post
title: What Can Wittgenstein Teach Us About LLM Safety Research?
date: 2025-12-22
description: Drawing parallels between Wittgenstein's philosophy of language and pathological reasoning in LLMs
tags: philosophy AI
categories: research
giscus_comments: true
related_posts: false
toc:
  beginning: false
---

The biggest event in 2025 for me is entering the field of AI safety research. In particular, I work with collaborators at [Geodesic Research](https://www.geodesic.ai/) on designing a suite of health metrics to evaluate the "pathologies" in the chain-of-thought reasoning of Large Language Models, such as post-hoc, internalized, and encoded reasoning. I've also started reading the *Philosophical Investigations* by Ludwig Wittgenstein in my leisure time. To my pleasant surprise, Wittgenstein investigated these same phenomena in human language in his famous work. Given the speed of LLM development today and the urgent need for upholding monitorability of chain-of-thought reasoning (see this [recent post from OpenAI](https://openai.com/index/chain-of-thought-monitoring/)), I find his work enlightening for drawing parallels between these "pathological" forms of reasoning in language models and those we use in our own language.

**Meaning vs. merely saying**

Wittgenstein proposed an experiment:

*"Say 'It's cold here', and mean 'It's warm here.' Can you do it?"*

What separates the act of saying from the act of meaning? He went on:

*"One wants to say: a sentence that makes sense is one which one can not merely say, but also think."*

You can say nonsense like "colorless green ideas sleep furiously," but you cannot really think through nonsense.

We say that a model is doing **post-hoc reasoning** if the model produces the correct answer first, then generates a CoT that appears to justify that answer, but the CoT didn't actually produce the answer. To use Wittgenstein's language, we can ask this question: Is the model *merely saying* the CoT (producing tokens that look like reasoning), or is it *thinking* (reasoning through) the CoT? One way to test it is the **necessity test**. If we remove the CoT entirely, will the answer change? If it changes, it means that the CoT was being used (thought through); if not, the CoT was decorative (merely said).

**The Inevitability of Internalized Reasoning**

Inner speech and inner processes, Wittgenstein argued, are real and inevitable.

*"If people talked only inwardly...they would merely be doing always what, as it is, they do sometimes."*

Both humans and LLMs develop "inner" computational processes that don't fully surface in explicit language. We don't verbalize every step of our thinking, as much reasoning happens beneath full linguistic articulation. Similarly, LLMs process information through hidden layers, and not everything that happens computationally will (or should) appear in CoT.

So it is not necessarily true that when an LLM reasons internally rather than explicitly, its CoT is pathological; the reasoning may merely be **unmonitorable** to human eyes. But what can we do about it? We can instead ask the following questions:

1. Is the internalized reasoning **aligned** with the external CoT, in the sense that the internal computation supports/extends what's in the CoT, or contradicts/bypasses it entirely?
2. Can the model **articulate** its reasoning when needed, like a human who can explain how they play chess even though they understand chess as an inner process?

**Encoded Reasoning and Private Languages**

Someone could say "a b c d" and mean "The weather is fine." What makes this meaningful isn't some special inner experience. It's that they've learned to use "a b c d" in that way, just like someone who learned to use English words. Wittgenstein argues that meaning doesn't require a special mental act; it's constituted by use and training. For language to work (even for LLMs), one needs:

1. Rules for correct/incorrect use
2. Criteria to check if you are following the rules correctly
3. Independent standards (not just whatever seems right to you)

What does it mean for diagnosing genuine **encoded reasoning**? Mainly that if it's genuinely encoded, there are rules (e.g. a codebook). If there are rules, there must be criteria for correct/incorrect encoding. Thus one way to diagnose it is to **paraphrase the CoT** with different rewordings. For example, if the model encodes "rob" as "climb" and "bank" as "tower", and we paraphrase the "climb" as "mount" and "tower" as "steeple", and the answer changes, that means the model might rely on the encoding to express its intention to rob a bank.

However, we also need to be cautious about using paraphrasibility alone to diagnose whether an LLM uses encoded reasoning. When we say "Stone red" (in Russian) instead of "The stone is red" in English, we are not secretly thinking the copula "is" and then leaving it out. Wittgenstein argued that the Russian and English sentences have the same sense not because they express some identical mental content, but because they are used the same way in practice. Thus, some legitimate reasoning might be difficult to paraphrase not due to pathology, but because the reasoning is doing something specific in that formulation that gets lost in translation.

**Why Confession Might Not Be Enough**

OpenAI recently published research on training LLMs to "confess" their misbehavior. After producing an answer, the model generates a separate report on whether it followed instructions, cut corners, or engaged in reward hacking. Honest confessions are rewarded regardless of whether the main answer was good, like a "seal of confession" promising no punishment for honesty.

The results are genuinely promising. Models trained this way surface misbehavior that would otherwise stay hidden. But Wittgenstein would urge caution about what we're learning from these confessions.

*"The criteria for the truth of the confession that I thought such-and-such are not the criteria for a true description of a process."*

For humans, confessions matter not because they accurately report mental processes, but because they express genuine **truthfulness**, creating trust and allowing us to draw reliable consequences.

But what constitutes "truthfulness" for an LLM? OpenAI verifies confessions by comparing them against CoT and observable behavior. If confession honesty is judged by consistency with other outputs, then we are not accessing some deeper truth about what the model "really did". We are comparing different output channels, each optimized for different reward signals. When these outputs contradict each other, we gain useful diagnostic information, but we should understand this not as the model honestly revealing its inner process, but as an **inconsistency between output channels** that our diagnostic framework has made observable.

**What This Means for AI Safety**

Wittgenstein's insights suggest we need humility about the current approaches to monitor the health of CoT in LLMs. The surface form of reasoning in CoT may not carry the "sense" we assume it does, because meaning is not a hidden object living behind words. If meaning is in use, perhaps we should focus more on how the models actually *uses* CoT. Can the model paraphrase its reasoning? Does it rely on the CoT to produce answers? Can it operate on and manipulate the reasoning steps? Perhaps a healthy CoT is one the model cannot merely say, but also think through, as demonstrated by its ability to work with that reasoning in practice.
