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

### The bitter lesson 1: Start with an existing repository if you can find one and build on it
When I began my first PhD project, I decided to build everything from scratch, 
thinking it would give me a deeper understanding and more control over the project. At that time, I was also very
new to programming in `python` and had a deep-rooted fear of using or changing other people's code.

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

### The bitter lesson 2: Check public datasets first before simulating your own data
When I started my project, I was eager to create a custom dataset that perfectly matched my research needs. 
I spent months developing complex simulations to generate synthetic data. 
However, this decision came with several unforeseen challenges and drawbacks:

1. **Time consumption**: Creating and validating a synthetic dataset took far longer than anticipated, especially
when I want to create dataset that is as close to real-world as possible. In the context of causal inference, one
might need to simulate the data generating process that considers all possible interactions among confounders, treatment 
and outcome. This is very hard to achieve and can take a lot of time.

2. **Reinventing the wheel**: I later discovered that several public datasets with various number of covariates, and 
ground truth causal effect existed that could have served my needs with minimal modifications.

In hindsight, I should have first thoroughly investigated existing public datasets. Here's what I learned:

1. **Extensive resources available**: Many fields have well-established, high-quality public datasets that are regularly used and validated by the research community.

2. **Time-saving**: Using public datasets allows you to start your actual research faster, without spending months on data generation and validation.

3. **Comparability**: Public datasets enable direct comparison of your methods with existing work, strengthening your research's credibility.

4. **Community support**: Popular public datasets often come with documentation, preprocessing scripts, and benchmarks from other researchers.


That's not to say that creating your own dataset is always wrong, especially for initial small-scale hypothesis testing. 
However, consider public datasets when scaling up your research.
### The bitter lesson 3: Don't be afraid to ask for help

### The bitter lesson 4: Don't be afraid to change the codes provided by your advisor

### The bitter lesson 5: Keep a daily log of your experiments

### The bitter lesson 6: Instead of topdown approach, start with the simplest model first