<h1>configuring git</h1>

#  1 . link git hub using name and mail

## git cnfig name
```
git config --global user.name "Harshadbankar1596"
```
## git config mail
```
git config --global user.email "harshadbankar1596@gmail.com"
```

## git config list

```
git config --list
```

## 2 open vs code terminal

## clone & status

### clone comand 

```
git clone https://github.com/Harshadbankar1596/Prime-anime.git
```

## use cd comand to go directory

```
cd folder-name
```

## show all file
```
ls
```

## show hiden fils
```
ls -a
```

# status comand

```
git status
```

# 3 add & commit

## add new file
```
git add file-name
```

## add all file

``` 
git add . 
```

## commit change

``` 
git commit -m "message"
```

# 4 push command to push code in git hub

## push command
```
git push origin main
```

goto github and refresh

# 5 init command

## init command
```
git init
```

## git remote
```
git remote add origin https://github.com/Harshadbankar1596/Prime-anime.git
```

## git verify remote
```
git remote -v
```

## git branch

```
git branch
```
## rename branch name

```
git branch -M main
```
cheack branck using git branch


## git push origin main

```
git push origin main
```

declare shortform
```
git push -u origin main
```
```
git push
```


# 6 git branches

## cheak branch
``` 
git branch
```

## goto next branch
```
git checkout branch-name
```

## create new branch
```
git checkout -b new-branch-name
```
## delete branch

befor delete goto next branch after delete 

else error

```
git branch -d branch-name
```

## push code in branch

```
git push origin branch-name
```

## 7 merging code

# compai branchs 
```
git diff main
```

# way 1 to merging branch
```
git merge branch-name
```

# way 2 using github

# pull command
remote changes to local changes

```
git pull origin main
```

# 8 resolving merge conflicts

## merge one branch to second branch

```
git merge second-branch-name
```


#  9 undoing changes
## check commits
```
git log
```
## case 1 stage changes
to delete a line
```
git reset file-name
```

## case 2 commited changes (for one commit)
```
git reset HEAD-1
```

## case 3 commited changes (for many commits)

```
git reset commit-hash
```
```
git reset --hard commit-hash
```



