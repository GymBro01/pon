function addTask(event)
{
input=document.querySelector("input");
list=document.getElementById("list");
list.insertAdjacentHTML("beforend",
`<div class="task">
<h1>${list.length()+1}. to skip liceum</h1>
<div>
<button class="true"></button>
<button class="false"></button>
</div>

</div>`)
}