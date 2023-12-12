document.addEventListener("DOMContentLoaded", function () {
  const markAsReadButton = document.querySelector(".mark-as-read");
  const unreadNotifications = document.querySelectorAll(".unread");

  markAsReadButton.addEventListener("click", function () {
    unreadNotifications.forEach((notification) => {
      notification.classList.remove("unread");
    });

    // Set the number of unread messages to zero
    const notifAmount = document.getElementById("notif-amount");
    notifAmount.textContent = "0";
  });

  // Add click event listener to each unread notification
  unreadNotifications.forEach((notification) => {
    notification.addEventListener("click", function () {
      // Toggle the class to mark it as read
      notification.classList.toggle("unread");

      // Update the number of unread messages
      const notifAmount = document.getElementById("notif-amount");
      const unreadCount = document.querySelectorAll(".unread").length;
      notifAmount.textContent = unreadCount.toString();
    });
  });
});
