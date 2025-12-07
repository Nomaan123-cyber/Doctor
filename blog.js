// THEME TOGGLE
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

// ==========================
// ✅ BLOG DATABASE (STORED)
// ==========================
let blogs = JSON.parse(localStorage.getItem("blogs")) || [
    {
        title: "To Every Brave International Student in the UK: You Are Not Alone",
        image: "student-mental-health.jpg",
        category: "Mental Health",
        content: `You are navigating financial strain, academic pressure, student loans, job anxiety in the AI era, and sometimes social isolation. These challenges are real, and your feelings are valid.

As a psychologist, I help international students with:
✔ Stress & anxiety management
✔ Emotional support
✔ Confidence building
✔ Career & academic balance

You are not alone. Your mental well-being matters.`
    }
];

// ✅ SAVE DEFAULT BLOG
localStorage.setItem("blogs", JSON.stringify(blogs));

const grid = document.getElementById("blogGrid");
const modal = document.getElementById("blogModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeBlog");

const categoryBar = document.getElementById("categoryBar");

// ✅ EXTRACT UNIQUE CATEGORIES
const categories = ["All", ...new Set(blogs.map(blog => blog.category))];

categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = cat;
    btn.onclick = () => filterBlogs(cat);
    categoryBar.appendChild(btn);
});

// ✅ RENDER BLOGS
function renderBlogs(filteredBlogs) {
    grid.innerHTML = "";
    filteredBlogs.forEach((blog, index) => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
      <img src="${blog.image}">
      <h3>${blog.title}</h3>
      <span class="tag">${blog.category}</span>
      <p>${blog.content.substring(0,80)}...</p>
    `;
        card.onclick = () => openBlog(blog);
        grid.appendChild(card);
    });
}

// ✅ FILTER LOGIC
function filterBlogs(category) {
    if (category === "All") {
        renderBlogs(blogs);
    } else {
        const filtered = blogs.filter(b => b.category === category);
        renderBlogs(filtered);
    }
}

filterBlogs("All");

// ✅ OPEN MODAL
function openBlog(blog) {
    modal.style.display = "flex";
    modalTitle.innerText = blog.title;
    modalImage.src = blog.image;
    modalContent.innerText = blog.content;
}

closeBtn.onclick = () => modal.style.display = "none";
