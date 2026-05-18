// Mock Data simulating a backend API response
const videoData = [
    {
        id: 1,
        title: "Building Agentic AI Systems from Scratch",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
        channelAvatar: "https://ui-avatars.com/api/?name=AI&background=random",
        channelName: "AI Engineering",
        views: "142K",
        timestamp: "2 days ago",
        duration: "18:45",
        category: "Machine Learning"
    },
    {
        id: 2,
        title: "Mastering Graph Algorithms in Python | DSA Course",
        thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80",
        channelAvatar: "https://ui-avatars.com/api/?name=CS&background=random",
        channelName: "Code Academy",
        views: "85K",
        timestamp: "1 week ago",
        duration: "45:20",
        category: "Computer Science"
    },
    {
        id: 3,
        title: "Lightweight Cybersecurity Frameworks for Mobile",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
        channelAvatar: "https://ui-avatars.com/api/?name=Sec&background=random",
        channelName: "InfoSec Daily",
        views: "23K",
        timestamp: "3 days ago",
        duration: "12:10",
        category: "Cybersecurity"
    },
    {
        id: 4,
        title: "Optimizing VS Code for Python Development",
        thumbnail: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=600&q=80",
        channelAvatar: "https://ui-avatars.com/api/?name=Dev&background=random",
        channelName: "DevTools",
        views: "310K",
        timestamp: "1 month ago",
        duration: "08:55",
        category: "Programming"
    },
    {
        id: 5,
        title: "How to Run 2km in Under 8 Minutes | Training Plan",
        thumbnail: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=600&q=80",
        channelAvatar: "https://ui-avatars.com/api/?name=Fit&background=random",
        channelName: "Track Prep",
        views: "1.2M",
        timestamp: "5 months ago",
        duration: "10:30",
        category: "Fitness"
    },
    {
        id: 6,
        title: "Understanding Time Complexity (Big O) in 10 Minutes",
        thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
        channelAvatar: "https://ui-avatars.com/api/?name=Alg&background=random",
        channelName: "AlgoMaster",
        views: "500K",
        timestamp: "2 weeks ago",
        duration: "11:15",
        category: "Computer Science"
    }
];

const categories = ["All", "Machine Learning", "Computer Science", "Cybersecurity", "Programming", "Fitness"];

// DOM Elements
const videoGrid = document.getElementById('video-grid');
const categoriesContainer = document.getElementById('categories-container');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

// Render Categories
function renderCategories() {
    categoriesContainer.innerHTML = categories.map((cat, index) => `
        <button class="category-chip ${index === 0 ? 'active' : ''}" onclick="filterVideos('${cat}', this)">
            ${cat}
        </button>
    `).join('');
}

// Render Videos
function renderVideos(data) {
    if (data.length === 0) {
        videoGrid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1/-1;">No videos found.</p>';
        return;
    }

    videoGrid.innerHTML = data.map(video => `
        <article class="video-card">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail-img">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <img src="${video.channelAvatar}" alt="${video.channelName}" class="channel-avatar">
                <div class="video-details">
                    <h3 class="video-title">${video.title}</h3>
                    <span class="channel-name">${video.channelName}</span>
                    <span class="video-meta">${video.views} views • ${video.timestamp}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Filter Videos
window.filterVideos = function (category, element) {
    // Update active class on chips
    document.querySelectorAll('.category-chip').forEach(chip => chip.classList.remove('active'));
    element.classList.add('active');

    // Filter data
    const filteredData = category === "All"
        ? videoData
        : videoData.filter(video => video.category === category);

    renderVideos(filteredData);
}

// Sidebar Toggle Functionality
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    // Basic implementation for demo - in a real app, you'd replace labels with icons only when collapsed
});

// Search functionality prevention (default form behavior)
document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.querySelector('.search-input').value.toLowerCase();
    const searchedData = videoData.filter(video => video.title.toLowerCase().includes(query));
    renderVideos(searchedData);
});

// Initialize App
function initApp() {
    renderCategories();
    renderVideos(videoData);
}

document.addEventListener('DOMContentLoaded', initApp);