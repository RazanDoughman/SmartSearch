# **SmartSearch**

A multilingual contextual search engine that understands queries beyond keywords. SmartSearch delivers accurate, intent-based results in both Arabic and English.
It uses advanced language models to compare meaning between queries and documents, ensuring more relevant and inclusive search experiences across languages.


## **Tech Stack**

**Frontend:** HTML, CSS, JavaScript  

**Backend:** Python, Flask

**ML Model:** SBERT


## **How It Works**

SmartSearch goes beyond keyword matching by using AI to understand what the user *actually* means. Here's how it works behind the scenes:

1. **Language Detection**  
   The system first detects whether the query is in Arabic or English to ensure it's compared with documents in the same language, while using one multilingual model (SBERT) to handle both.

2. **Embedding Generation**  
   The query is passed through a pre-trained multilingual SBERT model (`paraphrase-multilingual-MiniLM-L12-v2`), which converts it into a high-dimensional vector that captures its semantic meaning.

3. **Similarity Search**  
   The query vector is compared to precomputed document vectors using **cosine similarity**, measuring how closely their meanings align.

4. **Result Ranking**  
The most semantically relevant documents are ranked and returned, giving users results that truly reflect the meaning behind their query—even when the exact words don’t match.

## **Dataset**

The dataset used in SmartSearch was fully created from scratch, combining two manually curated sets—one in Arabic and one in English—into a single bilingual dataset.

Each entry includes a title, abstract, author, date, language label, and source link.

This dataset was designed specifically to support semantic search testing in both languages and ensures a balanced representation across topics and formats.

You can view the dataset in the `data_final.xlsx` file included in the project.

## **Interface & Features Overview**

SmartSearch was designed with simplicity, clarity, and bilingual inclusivity in mind. Here's an overview of the key interface components and how each contributes to the user experience:


#### Navigation Bar

- **Logo + App Name:** Clearly establish the brand and help with orientation.
- **Language Switcher:** A globe icon in the navbar allows users to toggle between English and Arabic seamlessly. Switching also updates the layout direction (LTR/RTL) and content language instantly.
- **About Us:** Provides a quick tooltip that explains what SmartSearch is and how it works. This keeps new users informed without overwhelming them.
- **Help:** Takes users to the Help section, which answers common questions about how to use the search engine effectively.

#### Home Page

- **Main Search Input:** A central input box invites users to enter queries in natural language—either Arabic or English.
- **AI Search Button:** Initiates the semantic search process, sending the query to the backend and returning the most relevant results.
- **Explore Articles Section:** Displays a curated set of articles from the dataset encouraging discovery even before a search is made.

#### Search Results Page

- **Context-Based Results:** Once a user submits a query, SmartSearch processes it using SBERT and returns ranked results based on semantic similarity.
- **Result Cards:** Each result includes:
  - Title
  - Abstract snippet
  - Author  
  - Year    
  - “Read More” button that links to the original source
- **Language-Based Filtering:** Results are fetched from either the Arabic or English part of the dataset based on query language, ensuring relevant and culturally appropriate matches.

#### Help Section & About Us

- The Help section answers common user concerns which improves user confidence and supports accessibility, especially for non-technical users.
- The About Us section is a simple text that explains the purpose of SmartSearch.

Both sections are available in both Arabic and English and auto-adjusts depending on the selected language.

#### SmartSearch was built with clarity, ease of use, and accessibility at its core—making it a powerful tool for both casual readers and researchers in Arabic and English contexts.


### **Try It Out**

SmartSearch will soon be available online for public access!

You'll be able to test the search engine directly through a simple web interface, where you can enter queries in Arabic or English and receive contextually matched results in real-time.

🔗 **Website:** *Coming Soon — [Deployment URL will be added here]*  

### Team

- **Razan Doughman** –  razan.doughman@gmail.com
- **Batoul Ballout** – batoulballout96@gmail.com
- **Rasha Harb** - rashah.harb@gmail.com


