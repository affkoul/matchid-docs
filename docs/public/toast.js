window.showCustomToast = function () {
    const toastContainer = document.getElementById("toast-container");
    console.log("Toast triggered!");

    // Create toast element
    const toast = document.createElement("div");
    toast.style.background = "#3451b2";
    toast.style.color = "#fff";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "5px";
    toast.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    toast.style.marginTop = "10px";
    toast.style.fontSize = "14px";
    toast.style.textAlign = "center";
    toast.innerText = "Coming Soon!";

    // Append toast to container
    toastContainer.appendChild(toast);
    toastContainer.style.display = "block";

    // Auto remove toast after 3 seconds
    setTimeout(() => {
        toastContainer.removeChild(toast);
        if (toastContainer.children.length === 0) {
            toastContainer.style.display = "none";
        }
    }, 3000);
};