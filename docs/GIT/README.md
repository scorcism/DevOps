# GIT

Q) What is version control system 

This address 2 major problems

`Sharing of code` and `Versions`


Q) Why `GIT` popular

Git is a Distributed version controlling system

Q) Diff between `centerilized` and `distributed` version controlling system.

In `centerilized` system, the code is maintained in a centeral repo whereas in `distributed` system developer can mimic the the repo and create multiple copies of it. 

In `centerilized` system, if the system goes down, the communication is stopped coz they were replying in the central server. In `Distributed` we can create multiple copies, and the dev can manege his own repo on his own and ask someone to take chnages from that repo.

This is called as `fork` 

Q) What is `fork` ?

In fork you create entire copy of the source. This way git is distributed.

Q) `GIT` vs `GITHUB`

`GIT` is a distributed version control system. Git is a open source project.

`GITHUB` has build solution on top of git. 

Q) Git Branching Strategy 

`Branch` -> Its a seperation from the main repo.

`master branch`, `release branch`, `feature branch`, `host fix branch`

any branch chnages will go to master, weather it is a feature branch, or release branches. All the changes will be cascaded back to master. `Master` branch will be `up-to` date.

`Release` always happens from `release branch`.

<details>
<summary>eg</summary>

![eg](https://imgur.com/nodAmfE.png) 

</details>

<details>
<summary>Git Interview Q&A and Commands for DevOps</summary>

```bash

git init # git repo is created

git add . # add file into tracking 

git  commit -m "message" # 

git push # 

git diff # changes that you have made 

git log # log all history of commits 

git reset --hard id

git reset --sort HEAD~1

git remote -v

git remote add repo-link

git branch new-branch-name # create new branch

git checkout branh-name # switching branches

git checkout -b branch-name # create branch and more to that branch

git branch -d branch-name # delete branch

git cherry-pick commid-id # picking the commints and adding to the current branch

git merge branch-name # merge branches

git rebase #


```

**merge vs rebase**

In "nuthsell" rebase mainatins commit flow control, means it will line up the commits where merge just merge the commits.


</details>

