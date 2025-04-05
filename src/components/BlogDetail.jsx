import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, List } from "lucide-react";
import "./BlogDetail.css"; // Import the CSS file

const blogPosts = [
  {
    id: 1,
    title: "Why Bihar Politics is So Interesting?",
    content: `
      <h2>Why Bihar Politics is So Interesting: A Deep Dive into the Heart of Indian Politics</h2>
      <p>
        Bihar, one of India’s most politically dynamic states, has always been at the center of fascinating and 
        unpredictable political drama. The state’s political landscape is full of twists and turns, making it one of 
        the most closely watched regions in Indian politics. But why is Bihar’s politics so interesting? Let’s explore 
        the key factors that make Bihar a unique and captivating part of India’s political ecosystem.
      </p>

      <h3>1. The Influence of Caste in Bihar Politics</h3>
      <p>
        One of the most intriguing aspects of Bihar’s politics is the strong influence of caste-based politics. 
        The upper castes, Other Backward Classes (OBCs), and Dalit communities play a significant role in shaping 
        the political parties’ strategies and vote banks.
      </p>

      <h3>2. Bihar’s Complex Political Alliances</h3>
      <p>
        In Bihar, political alliances are rarely straightforward. The Mahagathbandhan (Grand Alliance) and the NDA 
        (National Democratic Alliance) have seen multiple shifts and changes over the years.
      </p>
      <p>
        A key reason why Bihar’s politics is so interesting is because of how alliances are formed, broken, and 
        reformed, often with surprising results. The unexpected alignments between parties like RJD, JD(U), BJP, and 
        Congress always keep the voters guessing.
      </p>

      <h3>3. Charismatic Political Leaders</h3>
      <p>
        Nitish Kumar, Lalu Prasad Yadav, Tejashwi Yadav, and Sushil Modi are just a few of the larger-than-life 
        political figures in Bihar. These leaders have shaped the state’s political history and continue to capture 
        political attention with their actions, while the zeal for leadership remains strong.
      </p>

      <h3>4. The Role of Regional Parties</h3>
      <p>
        Unlike many other states in India, Bihar has a significant presence of regional parties, such as the 
        RJD (Rashtriya Janata Dal) and JD(U) (Janata Dal United), which dominate the state’s political landscape.
      </p>
      
      <h3>5. Voter Behavior and Political Upheavals</h3>
      <p>
        Bihar’s electorate is known for its distinct political behavior. The political winds in the state can shift 
        within elections, making it unpredictable. The 2015 Bihar Assembly elections, for example, saw a surprising 
        turnaround, while the 2020 Bihar Assembly elections also witnessed dramatic shifts.
      </p>

      <h2>Conclusion: Bihar’s Political Landscape – Always Evolving, Never Boring</h2>
      <p>
        Bihar’s politics will continue to evolve with time, bringing new challenges and unexpected turns. Whether it’s 
        caste dynamics, charismatic leaders, or shifting alliances, Bihar remains one of India’s most politically 
        vibrant states.
      </p>
    `,
    author: "Rajesh Kumar",
    date: "February 17, 2025",
    readTime: "6 min read",
    slug: "why-bihar-politics-is-interesting",
    imageUrl: "/why-bihar-politics-is-interesting.jpeg",
  },

  {
    id: 2,
    title: "What is Waqf Sanshodhan Bill?",
    content: `
      <h2>What is Waqf Sanshodhan Bill: Understanding Its Implications</h2>
      <p>
        The Waqf Sanshodhan Bill has been a topic of significant discussion in recent times. This bill aims to bring 
        changes to the existing Waqf Act, which governs the administration and management of Waqf properties in India. 
        But what exactly does this bill propose, and why is it important? Let’s delve into the details.
      </p>

      <h3>1. What is Waqf?</h3>
      <p>
        Waqf refers to a charitable endowment under Islamic law, where a property or asset is dedicated for religious 
        or charitable purposes. These properties are managed by Waqf boards, which are statutory bodies established 
        under the Waqf Act.
      </p>

      <h3>2. Key Provisions of the Waqf Sanshodhan Bill</h3>
      <p>
        The Waqf Sanshodhan Bill introduces several amendments to streamline the management of Waqf properties. Some 
        of the key provisions include:
      </p>
      <ul>
        <li>Strengthening the powers of Waqf boards to ensure better governance.</li>
        <li>Introducing stricter penalties for misuse or illegal occupation of Waqf properties.</li>
        <li>Enhancing transparency in the registration and management of Waqf assets.</li>
      </ul>

      <h3>3. Controversies Surrounding the Bill</h3>
      <p>
        While the bill aims to improve the administration of Waqf properties, it has also faced criticism from various 
        quarters. Some argue that the bill could lead to excessive government control over Waqf boards, potentially 
        undermining their autonomy.
      </p>

      <h3>4. The Importance of the Bill</h3>
      <p>
        The Waqf Sanshodhan Bill is crucial for ensuring that Waqf properties are used for their intended purposes. 
        By addressing issues like mismanagement and illegal encroachments, the bill seeks to protect the interests of 
        the community and promote social welfare.
      </p>

      <h2>Conclusion: A Step Towards Better Governance</h2>
      <p>
        The Waqf Sanshodhan Bill represents an important step towards improving the governance of Waqf properties in 
        India. While it has its share of challenges, the bill has the potential to bring about positive changes if 
        implemented effectively.
      </p>
    `,
    author: "Ayesha Khan",
    date: "April 6, 2025",
    readTime: "5 min read",
    slug: "what-is-waqf-sanshodhan-bill",
    imageUrl: "/what-is-waqf-sanshodhan-bill.jpg",
  }
];

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center text-xl mt-20">Blog not found!</div>;
  }

  return (
    <div className="blog-container">
      {/* Back Button */}
      <button onClick={() => navigate("/blog")} className="back-button">
        <ArrowLeft className="icon" /> Back
      </button>

      {/* Blog Image */}
      <img src={post.imageUrl} alt={post.title} className="blog-image" />

      {/* Blog Title */}
      <h1 className="blog-title">{post.title}</h1>

      {/* Meta Info */}
      <div className="blog-meta">
        <span><User className="icon" /> {post.author}</span>
        <span><Calendar className="icon" /> {post.date}</span>
        <span><Clock className="icon" /> {post.readTime}</span>
      </div>

      {/* Table of Contents */}
      <div className="table-of-contents">
        <h2><List className="icon" /> Table of Contents</h2>
        <ul>
          <li><a href="#section1">Why Bihar Politics is So Interesting</a></li>
          <li><a href="#section2">Bihar’s Political Landscape – Always Evolving, Never Boring</a></li>
        </ul>
      </div>

      {/* Blog Content */}
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
