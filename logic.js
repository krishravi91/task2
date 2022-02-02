      const formEl = document.querySelector("form");
      const tbodyEl = document.querySelector("tbody");
      const tableEl = document.querySelector("table");
      function onAddTask(e) {
        // e.preventDefault();
        const task = document.getElementById("task").value;
        tbodyEl.innerHTML += `
            <tr>                
                <td>${task}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
      }

      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      tableEl.addEventListener("click", onDeleteRow);