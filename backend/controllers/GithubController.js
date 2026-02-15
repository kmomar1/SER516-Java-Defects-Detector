import shell from 'shelljs';


export const cloneRepo = (req, res) => {
    const githubLink = req.body.github_link;
    const repoName = githubLink.split('/').pop();
    const repoPath = `./repos/${repoName}`;

    //Need to change it later to add the repo to the volume of the container
    if (shell.exec(`git clone ${githubLink} ${repoPath}`).code !== 0){
      return res.status(401).json({ message: 'Failed to clone repository please make sure the URL is correct and the repo is public' });
    }
    else {
      return res.status(200).json({ message: 'Repository cloned successfully' });
    }
}   
