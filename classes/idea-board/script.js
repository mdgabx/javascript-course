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
    this.ideas.push(idea);
  }

  unpin(idea) {
    this.ideas = this.ideas.filter((currentIdea) => currentIdea !== idea);
  }

  count() {
     return this.ideas.length
  }

  formatToString() {
    let result = '';
    result += `${this.title} has ${this.count()} idea(s)\n`;

    this.ideas.forEach((idea) => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
    })

    return result;
  }
}


// pin
const sampleBoard = new ProjectIdeaBoard("Tech Projects Board");

const sampleIdea = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.")

sampleBoard.pin(sampleIdea);

const response = sampleBoard.formatToString()
console.log(response);