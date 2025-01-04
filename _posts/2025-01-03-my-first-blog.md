---
layout: post
title: The bitter lessons I learnt from my first PhD project
date: 2025-01-03 
description: A post about the lessons learnt from working on my first PhD project.
tags: reflections
categories: blog-posts
related_posts: false
toc:
  beginning: true
---

I recently completed my first PhD project and I must say it was a bittersweet experience. 
I learnt a lot from the project, but I also made a lot of mistakes. 
In this post, I will share the bitter lessons I learnt from my first PhD project.

A disclaimer: I am not an expert in this field, but I am sharing my experience in the hope 
that it will help others avoid the mistakes I made, especially those who, like me, don't come from a 
traditional computer science background.

#### The bitter lesson 1: Start with an existing repository if you can find one and build on it
When I began my first PhD project, I decided to build everything from scratch, 
thinking it would give me a deeper understanding and more control over the project. At that time, I am also very
new to programming in `python` and have a deep-rooted fear of using or changing other people's code.

This turned out to be a significant mistake that cost me valuable time and energy. In retrospect, 
I should have searched for existing repositories or codebases related to my research topic. 

There are several reasons why this approach would have been more beneficial:

1. **Time efficiency**: Starting from an existing codebase would have saved me months of work in setting 
up basic infrastructures and implementing standard algorithms.

2. **Learning from others**: By examining and building upon existing code, 
I could have learned best practices and coding standards specific to my field.

3. **Focusing on novel contributions**: Instead of reinventing the wheel, 
I could have devoted more time to developing and implementing my unique ideas and contributions.

4. **Reduced errors**: Established codebases often have fewer bugs and have been tested more thoroughly than something built from scratch.

5. **Better documentation**: Many existing repositories come with comprehensive documentation, 
which can be invaluable for understanding complex algorithms or data structures.

Of course, this doesn't mean you should never build from scratch. 
There are times when it's necessary or beneficial to do so. 
However, for most PhD projects, especially in the early stages, 
leveraging existing work can significantly accelerate your progress and 
allow you to focus on your unique contributions to the field.

#### The bitter lesson 2: Check public datasets first before simulating your own data

When starting my project, I eagerly created a custom dataset, spending months on complex simulations for synthetic data. This decision led to unforeseen challenges:

1. **Time consumption**: Creating and validating synthetic data, especially for causal inference with intricate confounding interactions, was unexpectedly time-consuming.

2. **Reinventing the wheel**: I later discovered several public datasets with various covariates and ground truth causal effects that could have served my needs with minimal modifications.

In hindsight, investigating existing public datasets first would have been beneficial:

- **Extensive resources**: Many fields have well-established, high-quality public datasets.
- **Time-saving**: Allows faster initiation of actual research.
- **Comparability**: Enables direct comparison with existing work.
- **Community support**: Often includes documentation, preprocessing scripts, and benchmarks.

Creating your own dataset isn't always wrong, especially for initial small-scale hypothesis testing. However, consider public datasets when scaling up your research.
#### The bitter lesson 3: Don't be afraid to ask for help

#### The bitter lesson 4: Don't be afraid to change the codes provided by your advisor

#### The bitter lesson 5: Keep a daily log of your experiments

#### The bitter lesson 6: Instead of topdown approach, start with the simplest model first