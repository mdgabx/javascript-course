const projectStatus = {
  "PENDING": {
    "description": "Pending Execution",
  },
  "SUCCESS": {
    "description": "Executed Successfully",
  },
  "FAILURE": {
    "description": "Execution Failed",
  } 
}

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description; 
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.idea.push(idea);
  }

  unpin(idea) {
    this.ideas = this.ideas.filter((currentIdea) => currentIdea !== idea);
  }

  count() {
     return this.ideas.length
  }

  formatToString() {

  }
}


// pin
const idea = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.");

new ProjectIdeaBoard(id)