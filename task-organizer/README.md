# Tasks organizer

Project to learn react and some other aspects of web applications.

## Launch

To run the project, clone the repository and run the following commands:

<ul>
<li><code>cd task-organizer</code></li>
<li><code>npm install</code></li>
<li><code>npm start</code></li>
</ul>

## Design development

Design was developed in figma.

<img src="/task-organizer/materials/Colors.jpg" alt="Picture 1" width="700">

<em><b>Picture 1.</b> Colors that are used in project</em>

<img src="/task-organizer/materials/Project-design.jpg" alt="Picture 2" width="700">

<em><b>Picture 2.</b> Website model</em>

## Functional showcase

<ul>
<li>Tasks can be deleted</li> 
<li>Priority of a task can be changed priority can be changed in any direction</li>
<li>Tasks can be sorted by priority or deadline date</li>
<li>Search bar finds tasks with certain substring, case not matter</li>
</ul>

![Deletion, prioritization, sort and searching showcase](https://github.com/s-a-v-a-n-n-a/Tasks_organizer/blob/main/task-organizer/materials/delete-prioritize-sort-find.gif)

<em><b>GIF 1.</b> Deletion, prioritization, sort and searching showcase.</em>

<ul>
<li>Tasks can be added. If name is not typed, it is <code>Smth important</code> by default<, if priority is not typed, it is <code>0</code> by default, if deadline is not picked, it is next day date by default</li> 
<li>Tasks can be marked done and not done</li>
<li>Tasks that have deadline before current date are showed in warning yellow colors and can be showed by button <code>Outdated</code></li>
</ul>

![Adding, marking done, outdated tasks showcase](https://github.com/s-a-v-a-n-n-a/Tasks_organizer/blob/main/task-organizer/materials/add-done-outdated.gif)

<em><b>GIF 2.</b> Adding, marking done, outdated tasks showcase.</em>

<ul>
<li>If there are too many tasks on page, they can be scrolled</li> 
</ul>

![Scrolling showcase](https://github.com/s-a-v-a-n-n-a/Tasks_organizer/blob/main/task-organizer/materials/scroll.gif)

<em><b>GIF 3.</b> Scrolling showcase.</em>

## TODO

<ul>
<li> Add color themes with <code>useContext</code> hook
</ul>
