var store = [{
        "title": "Interactive Tutorial with `learnr` and Binder",
        "excerpt":"Creating Interactive Tutorial with learnr Package   learnr Package is a package that creates a specialized Shiny apps for interactive tutorials. While useful, the difficult part for students is often installing the software and running them to go through the tutorials, and, for the teachers, it would be great not to have to maintain a Shiny server.   “Hosting” Interactive Tutorial with Binder   Binder is a flexible platform to reproduce a computational environment. You can read more about Binder here   For example, Binder can start a Rstudio session with cloned contents of a GitHub repository, and start a Shiny app for you.   An Example Tutorial on Binder   I created two interactive tutorial examples in this Github. Below are the two Binder links you can try out      shiny/test1:    shiny/test2:   ","categories": [],
        "tags": [],
        "url": "/learnr-tutorial/",
        "teaser": null
      },{
        "title": "Repositories for Private Development of Public Course Content",
        "excerpt":"For course material development, some content such as homework solutions need to be kept private (at least temporarily). This note explains how two repositories can be used in concert to simplify private development of public course content.   The material on this page has been adopted and expanded from this posting   Initial setup   Remote Public and Private Repositories   Suppose you have two Github repositories:     Public repo is at https://github.com/username/public-repo.git   Private repo is at https://github.com/username/private-repo.git   The public repo will be open to the students, whereas the private repo will be used for development and testing (shared with TAs etc.)   Local Repository with Public and Private Remotes   Create a local repository and set target repositories   mkdir ~/local-repo &amp;&amp; cd ~/local-repo git init git remote add public https://github.com/username/public-repo.git git remote add private https://github.com/username/private-repo.git   Add first public file in master branch and push to public-repo:   # cd ~/local-repo &amp;&amp; git checkout master  echo \"README\" &gt;&gt; README.md git add README.md git commit -m\"first commit\"  git push public master git push private master  Now, public-repo/master and private-repo/master on Github are identical.   Create a local development branch: private-branch   # cd ~/local-repo &amp;&amp; git checkout master git checkout -b private-branch  echo \"handout\" &gt; homework1-handout.md echo \"solutions\" &gt; homework1-solution.md git add homework1-handout.md homework1-solution.md  git commit -m\"private development\"  git push -u private private-branch  Here private-branch branch syncs with private-repo/private-branch (remote branch name defaults to private-branch)   Publishing content to public repository   Do not merge but checkout relevant files into public-repo/master:   # cd ~/public-repo &amp;&amp; git checkout master  git checkout private-branch homework1-handout.md git add homework1-handout.md git commit -m\"release homework1\" git push  Note the line git checkout private-branch homework1-handout.md overwrites (or creates) homework1-handout.md in public-repo/master.   Using different remote vs. local branch names (Optional)   A local branch (you would like to keep private) can have any name. For example, create a local branch named new-branch to sync with private-repo/private-branch:   # cd ~/public-repo &amp;&amp; git checkout master  git checkout --orphan new-branch git pull private private-branch # make some changes git push private new-branch:private-branch  Any changes in new-branch branch will now push to private-repo/private-branch.   Note: upstream tracking doesn’t seem to stick with ‘-u’.   Setting default push behavior (Optional)   To me, the default behaviors of git pull and git push are strange. I kept on using git push [remote] [branch] above because even setting upstream with -u does not behave as I expect it to.   However, configuring git config push.default upstream seems much more intuitive to me.   Also, forcing checkout seems to simplify the process of cloning private/feature to a new local branch and sets the upstream:   git config push.default upstream --local git checkout -f -b new-branch private/feature echo \"fix problems\" &gt;&gt; homework1-handout.md git add -u git commit -m\"fix homework1-handout\" git push -v  Above will push our local new-branch to private/feature branch.   Duplicating Dual Remote Setup   Clone public repository and add private repository as remote:   git clone https://github.com/username/public-repo.git ~/public-repo cd ~/public-repo  # set local master branch to track public master branch git remote rm origin # to explicitly differentiate public vs private repos git remote add public https://github.com/username/public-repo.git git push -u public master    Sync a local private-branch with private-repo/private-branch:   # cd ~/public-repo &amp;&amp; git checkout master  git checkout --orphan private-branch   git remote add private https://github.com/username/private-repo.git git pull private private-branch  echo \"add solutions\" &gt;&gt; homework1-solution.md git add -u git commit -m\"modify homework 1 solution\"  git push -u private private-branch   Check pushing is setup properly with a dry run: git push -n -v   Adding Branches   If multiple people are working on this repository, multiple branches need to be created. To create additional branches to the private repository, simply create a branch from private-branch:   # cd ~/public-repo &amp;&amp; git checkout private-branch  git checkout -b new-private-branch echo \"newfile\" &gt; newfile.txt git add newfile.txt git commit -m'adding a new file'  git remote add private new-private-branch git push --set-upstream private new-private-branch   ","categories": [],
        "tags": [],
        "url": "/teaching-repos/",
        "teaser": null
      }]
