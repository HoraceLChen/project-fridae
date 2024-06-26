document.addEventListener('DOMContentLoaded', function() {
  const rootStyles = getComputedStyle(document.documentElement);
  const hourDivisions = rootStyles.getPropertyValue('--hour-divisions').trim();
  console.log('F.R.I.D.A.E JS ONLINE');
  // const tab = document.querySelectorAll('.tab')
  const tabs = document.querySelectorAll('.tab-control');
  const tabContents = document.querySelectorAll('.tab');
  tabs[0].setAttribute('aria-selected', 'true');
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const gridContainerColumns = document.querySelector('.grid__container__columns');
  const gridContainerRows = document.querySelector('.grid__container__rows');


  for (let i = 0; i < 7; i++) {
    const gridColumn = document.createElement('div');
    gridColumn.classList.add('grid__column');
    gridContainerColumns.appendChild(gridColumn);
  }

  for (let j = 0; j < hourDivisions; j++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid__row');
    gridContainerRows.appendChild(gridRow);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();
      const selectedTab = event.currentTarget;

      // Remove aria-selected=true from all tabs and hide all tab content
      tabs.forEach(tab => {
        tab.setAttribute('aria-selected', 'false');
      });

      // tabContents.forEach(content => {
      //   content.style.display = 'none';
      // });

      // Add aria-selected=true to the clicked tab and show the associated content
      selectedTab.setAttribute('aria-selected', 'true');
      // console.log(selectedTab.children[0].children[1]);
      // selectedTab.children[0].children[1].classList.add('text-white');
      // const contentId = selectedTab.getAttribute('href').substring(1);
      // document.getElementById(contentId).style.display = 'block';
      });
    });
    function getThisWeeksDates() {
      const today = new Date();
      const dayOfWeek = today.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      const startOfWeek = new Date(today); // Create a new date object for the start of the week

      // Calculate the date of the Sunday of the current week
      startOfWeek.setDate(today.getDate() - dayOfWeek + 1);

      // Create an array to hold the dates of the week
      const dates = [];

      // Populate the dates array with the dates for this week
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + i);
        dates.push(currentDate);
      }
      return dates;
    }

    // Format the dates to a readable format (e.g., 'YYYY-MM-DD')
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth()).padStart(2, '0');
      const monthString = monthNames[date.getMonth()]; // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0');
      return [`${monthString}`,`${day}`];
    }

    const thisWeeksDates = getThisWeeksDates().map(formatDate);

      // .forEach to interate over each date
      thisWeeksDates.forEach((date, index) => {

        // This line checks if the current index is less than the number of elements in tabContents.
        // This ensures that we don't try to access an index in dateDivs that doesn't exist, preventing errors.
        if (index < tabContents.length) {

          // This line selects the div element from tabContents at the current index.
          const dateDiv = tabContents[index];

          // This line retrieves all child elements of the current tabContent and stores them in the children variable.
          const dateDivChildren = dateDiv.children;

          // This line checks if the current tabContent has more than one child element. not sure that this is necessary
          // if (dateDivChildren.length > 1) {

            // This line sets the innerText of the second child element of the current tabContent to the current date.
            dateDivChildren[1].innerText = date[1]; // Select the second child element
            dateDivChildren[2].innerText = date[0];
            dateDivChildren[1].classList.add('text-uppercase')
            dateDivChildren[2].classList.add('text-uppercase')
          // }
        }

      });

      document.addEventListener('DOMContentLoaded', function() {

      });
});
