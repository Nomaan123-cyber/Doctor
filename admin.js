function publishBlog() {
    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;

    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    blogs.push({ title, image, category, content });
    localStorage.setItem("blogs", JSON.stringify(blogs));

    alert("✅ Blog Published Successfully!");
}
