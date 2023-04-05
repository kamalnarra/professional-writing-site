// Existing URL section
document.getElementById("sendRequest").addEventListener("click", () => {
  const url = document.getElementById("url").value;
  const response = document.getElementById("response");

  if (url.trim() === "") {
    response.textContent = "Please enter a URL.";
  } else {
    response.textContent = `Request sent to server for: ${url}`;
  }
});

// New DNS resolution section
document.getElementById("resolveDns").addEventListener("click", () => {
  const domain = document.getElementById("domain").value;
  const dnsResponse = document.getElementById("dnsResponse");

  if (domain.trim() === "") {
    dnsResponse.textContent = "Please enter a domain.";
  } else {
    dnsResponse.textContent = `IP address for ${domain}: 123.45.67.89 (example)`;
  }
});

// New rendering section
document.getElementById("renderContent").addEventListener("click", () => {
  const htmlContent = document.getElementById("htmlContent").value;
  const renderedContent = document.getElementById("renderedContent");

  if (htmlContent.trim() === "") {
    renderedContent.innerHTML = "Please paste HTML content.";
  } else {
    renderedContent.innerHTML = htmlContent;
  }
});

// New web server response section
document.getElementById("showStatus").addEventListener("click", () => {
  const statusCode = document.getElementById("statusCode").value;
  const statusDescription = document.getElementById("statusDescription");

  const statusDescriptions = {
    200: "200 OK - Request succeeded",
    404: "404 Not Found - Requested resource not found",
    500: "500 Internal Server Error - Server encountered an error processing the request",
  };

  if (statusCode.trim() === "") {
    statusDescription.textContent = "Please enter a status code.";
  } else if (statusDescriptions[statusCode]) {
    statusDescription.textContent = statusDescriptions[statusCode];
  } else {
    statusDescription.textContent =
      "Status code not found in the example list.";
  }
});

// New web security section
document.getElementById("checkSecurity").addEventListener("click", () => {
  const websiteUrl = document.getElementById("websiteUrl").value;
  const securityStatus = document.getElementById("securityStatus");

  if (websiteUrl.trim() === "") {
    securityStatus.textContent = "Please enter a website URL.";
  } else if (websiteUrl.startsWith("https://")) {
    securityStatus.textContent =
      "This website uses HTTPS for secure communication.";
  } else {
    securityStatus.textContent =
      "This website may not be using HTTPS for secure communication.";
  }
});
