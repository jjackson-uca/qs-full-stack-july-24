//Build a table
<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  function createTable(tableData) {
    let table = document.createElement('table');
        let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    for (let column of Object.keys(tableData[0])) {
      let th = document.createElement('th');
      tableRow.appendChild(th);
      th.appendChild(document.createTextNode(column));
    }
        for (let row of tableData) {
      let tr = document.createElement('tr');
      table.appendChild(tr);
      for (let data of Object.keys(row)) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.appendChild(document.createTextNode(row[data]));
        if (typeof(row[data] === 'number')) {
          td.style.textAlign = 'right';
        }
      }
    }
    return table;
  }

  document.querySelector('#mountains').appendChild(createTable(MOUNTAINS));

</script>



//Elements by a tag name

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    let nodes = [];
    tagName = tagName.toLowerCase();

    function addMatchingChildNodes(node) {
      node.childNodes.forEach(n => {
        if (n.nodeName.toLowerCase() == tagName) {
          nodes.push(n);
        }
        addMatchingChildNodes(n);
      }); 
    }

    addMatchingChildNodes(node);

    return nodes;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>


//The Cats Hat

<style>body { min-height: 200px }</style>
<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  let cat = document.querySelector("#cat");
  let hat = document.querySelector("#hat");

  let angle = 0;
  let lastTime = null;
  function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
    cat.style.left = (Math.cos(angle) * 200 + 230) + "px";

    // Your extensions here.
    cat.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
    cat.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>
