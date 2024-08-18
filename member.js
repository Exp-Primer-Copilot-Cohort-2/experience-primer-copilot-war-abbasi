function skillsMember(){
    this.skills = ['JS', 'React', 'Node.js', 'Python', 'Ruby'];
    this.showSkills = function(){
        let self = this;
        this.skills.forEach(function(skill){
            console.log(`${skill} is required for ${self.name}`);
        });
    }
}