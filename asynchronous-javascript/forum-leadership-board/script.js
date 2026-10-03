const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

// elements
const postsContainer = document.getElementById("posts-container");



const timeAgo = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp)

  const difference = now - past;

  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));


  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  return `${days}d ago`;
}


const viewCount = (views) => {
  if (views < 1000) {
    return views
  }

  return `${Math.floor(views / 1000)}k`
}

const forumCategory = (id) => {
  const { category = "General", className = "general" } = allCategories[id] || {};

  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
};

const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);

      const avatar = user.avatar_template.replace("{size}", "30");

      if (!avatar.startsWith("/")) {
        avatar = "/" + avatar;
      }

      return `<img src="${avatarUrl}${avatar}" alt="${user.name}">`;
    })
    .join("");
};

const showLatestPosts = (data) => {
  const { users, topic_list } = data
  const topics = topic_list.topics;

  return topics.map(({ id, title, views, posts_count, slug, posters, category_id, bumped_at }) => 
  postsContainer.innerHTML += `<tr>
    <td>
      <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
      ${forumCategory(category_id)}"
    </td>
    <td>
      <div class="avatar-container">${avatars(posters, users)}</div>
    </td>
    <td>${posts_count - 1}</td>
    <td>${views}</td>
    <td>${timeAgo(bumped_at)}</td>
  </tr>`);
}

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json()

    showLatestPosts(data);
  } catch (err) {
    console.log(err)
  }
}

fetchData();




