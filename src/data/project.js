export class Project {
    constructor(logo, cardBanner, titleVideo, projectName, shortDescription, longDescription, contributors) {
        if(!Project.allProjects) {Project.allProjects = []}
        Project.allProjects.push(this)

        this.logo = logo;
        this.cardBanner = cardBanner
        this.titleVideo = titleVideo;
        this.projectName = projectName;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.contributors = contributors;
    }
}