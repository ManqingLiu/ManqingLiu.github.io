---
layout: post
title: On Representation 
date: 2025-06-18
description: A blog post on representation
tags: philosophy maths AI comments
categories: blogs
giscus_comments: true
related_posts: false
toc:
  beginning: true
citation: true
---

### The Mystery of "Representation"

What does **representation** mean? I encountered this word frequently in machine learning papers, where it sounds abstract and researchers assume you know what it is without explanation. The term appears across vastly different domains - philosophy, mathematics, and AI - yet seems to carry a deeper, unified meaning that connects these fields in surprising ways.

### Philosophical Foundations: From Plato to Schopenhauer

The concept of representation has deep philosophical roots. For **Plato**, representation (mimesis) refers to artistic imitations that are "copies of copies" - three degrees removed from truth since they imitate physical objects which themselves are merely imperfect copies of the eternal Forms (*Republic* Book X, 596a-598d). This establishes a hierarchy: the perfect Forms, their imperfect physical manifestations, and finally our representations of those manifestations.

**Schopenhauer** offers a different perspective. According to him, **representation** (German: *Vorstellung*) refers to the world as it appears to us through our cognitive faculties - essentially, the phenomenal world of experience as opposed to reality as it truly is. Where Plato sees representations as degraded copies, Schopenhauer sees them as the fundamental structure of how we can know anything at all.

### Mathematical Precision: The Riesz Representation Theorem

Perhaps not coincidentally, **representation** also appears in functional analysis, providing mathematical precision to these philosophical intuitions. The **Riesz Representation Theorem** serves as a perfect bridge between abstract philosophical concepts and concrete mathematical structures.

**Riesz Representation Theorem**: For any continuous linear functional φ on a Hilbert space H, there exists a unique element f ∈ H such that:

$$\phi(g) = \langle f, g \rangle \text{ for all } g \in H$$

This establishes an isometric isomorphism between the space H and its dual H*:

$$R: H^* \to H$$
$$\phi \mapsto f \text{ where } \phi(\cdot) = \langle f, \cdot \rangle$$


The theorem embodies a profound philosophical principle: **every way of measuring relationships (φ) has a unique concrete representation (f)**. This mirrors Plato's theory of Forms - abstract concepts like "justice" or "beauty" (the functionals φ) must have concrete manifestations (the representatives f) that preserve their essential relationships.

What makes this connection profound is that the Riesz theorem guarantees **uniqueness** - there's only one vector that can represent each functional. This suggests a mathematical foundation for the idea that abstract relationships have canonical concrete representations.

### Computational Platonism: AI and Universal Representations

Two recent papers in AI reveal how these philosophical and mathematical ideas manifest in machine learning, suggesting we may be witnessing a form of computational Platonism.


"The Platonic Representation Hypothesis" by Huh et al. (2024) argues that representations in AI models are converging toward a shared statistical model of reality, explicitly drawing on Plato's concept of an ideal reality that underlies our sensations. The authors demonstrate that as neural networks become larger and more capable, they develop increasingly similar ways of representing data, regardless of their different architectures, training objectives, or even data modalities.


Building on this foundation, "Harnessing the Universal Geometry of Embeddings" by Jha et al. (2025) takes the bold step of proposing a "Strong Platonic Representation Hypothesis" - not only do these universal representations exist, but they can be practically exploited.

Consider this striking example: imagine you've stolen a corporate vector database containing thousands of embedded emails, but you have no idea what the emails actually say or even how the embedding model works. The vec2vec method can take these mystery vectors and translate them into the space of a publicly available model like BERT, allowing you to extract sensitive information about the original emails - company names, financial discussions, even partial email content - without ever seeing the actual text or having any training examples that connect the two models.

Their method achieves cosine similarities as high as 0.92 between translated and ground-truth embeddings, successfully extracting information from as many as 80% of documents in their experiments. This isn't just a theoretical breakthrough; it's a practical demonstration that the geometric structure of meaning itself may be more universal than we ever imagined.

#### The Mathematical Bridge to Machine Learning


In modern embedding spaces, the Riesz theorem manifests beautifully. Consider how semantic similarity is computed:

$$\text{similarity}(\text{text}_1, \text{text}_2) = \langle \text{embed}(\text{text}_1), \text{embed}(\text{text}_2) \rangle$$

Here, each embedded text acts as a "representation" of a linear functional that measures semantic affinity. The vec2vec translation can be viewed as finding representations across different Hilbert spaces:

$$F: H_1 \to H_2$$
$$\text{where } F(e_1) \approx e_2 \text{ such that } \langle F(e_1), F(e_1') \rangle_{H_2} \approx \langle e_1, e_1' \rangle_{H_1}$$


The "universal latent space" in vec2vec can be understood as the canonical Hilbert space where Riesz representatives take their most natural form. The method learns input adapters that transform embeddings from each encoder-specific space into a universal latent representation:

$$A_1: H_1 \to H_{\text{universal}}$$
$$A_2: H_2 \to H_{\text{universal}}$$

where $H_{\text{universal}}$ contains the "true" Riesz representatives that both models are approximating.

### The Deep Convergence

What emerges is a remarkable convergence across domains:

- **Philosophically**: Both Plato and Schopenhauer suggest that our access to reality is mediated through representations that may reveal deeper truths about the structure of existence itself.

- **Mathematically**: The Riesz theorem proves that abstract relationships must have unique concrete representations, providing the formal foundation for this intuition.

- **Computationally**: Modern AI systems appear to be discovering these canonical representations empirically, converging on universal geometric structures that encode semantic meaning.

This suggests that when different AI systems converge on similar representations, they're not just finding arbitrary solutions, but discovering the unique mathematical objects that faithfully encode semantic relationships. The universal geometry isn't just an empirical observation - it's a mathematical necessity, rooted in the fundamental structure of how abstract relationships must be concretely represented in any complete space.

### Representation as the Bridge Between Mind and Reality

The concept of representation serves as a bridge between the abstract and concrete, the universal and particular, the mathematical and empirical. From Plato's Forms to Schopenhauer's phenomenology, from the Riesz theorem to modern neural networks, we see the same fundamental question: How do abstract relationships manifest in concrete, computable forms?

The recent work on universal embedding geometries suggests we may be witnessing a computational version of these age-old philosophical insights - different AI systems, like different coordinate systems in mathematics, may be discovering the same underlying representational structure of semantic space. This convergence implies that representation in machine learning isn't just a useful computational trick, but may reflect fundamental principles about how complex structures can be efficiently encoded while preserving their essential relationships.

Perhaps we are indeed living through a form of computational Platonism, where different AI systems are all glimpsing shadows of the same underlying forms - the canonical representations of meaning itself.

## References

- Huh, M., Cheung, B., Wang, T., & Isola, P. (2024). The Platonic Representation Hypothesis. *arXiv preprint arXiv:2405.07987*.
- Jha, R., Zhang, C., Shmatikov, V., & Morris, J. X. (2025). Harnessing the Universal Geometry of Embeddings. *arXiv preprint arXiv:2505.12540*.
- Plato. *Republic*. Book X, 596a-599a.
- Schopenhauer, A. *The World as Will and Representation*. Trans. E.F.J. Payne. 2 vols. New York: Dover Publications, 1969.