// SkillSwap - Main JavaScript File
// This file contains all interactive functionality for the website

document.addEventListener("DOMContentLoaded", () => {
  initializePage()
})

// Initialize page based on current page
function initializePage() {
  const currentPage = window.location.pathname

  if (currentPage.includes("browse.html")) {
    initializeBrowsePage()
  } else if (currentPage.includes("contact.html")) {
    initializeContactPage()
  }
}

// ============================================
// BROWSE PAGE FUNCTIONALITY
// ============================================

function initializeBrowsePage() {
  const searchInput = document.getElementById("searchInput")
  const categoryFilter = document.getElementById("categoryFilter")

  if (searchInput) {
    searchInput.addEventListener("keyup", filterProfiles)
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProfiles)
  }
}

// Filter profiles based on search and category
function filterProfiles() {
  const searchInput = document.getElementById("searchInput")
  const categoryFilter = document.getElementById("categoryFilter")
  const profileCards = document.querySelectorAll(".profile-card")

  const searchTerm = searchInput.value.toLowerCase()
  const selectedCategory = categoryFilter.value

  profileCards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase()
    const skills = card.getAttribute("data-skills").toLowerCase()
    const category = card.getAttribute("data-category")

    // Check if card matches search term
    const matchesSearch = name.includes(searchTerm) || skills.includes(searchTerm)

    // Check if card matches category
    const matchesCategory = selectedCategory === "" || category === selectedCategory

    // Show or hide card based on filters
    if (matchesSearch && matchesCategory) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

// ============================================
// EXCHANGE REQUEST FUNCTIONALITY
// ============================================

function requestExchange(studentName) {
  // Get existing requests from localStorage
  const requests = JSON.parse(localStorage.getItem("exchangeRequests")) || []

  // Create new request object
  const newRequest = {
    id: Date.now(),
    studentName: studentName,
    requestDate: new Date().toLocaleDateString(),
    status: "pending",
  }

  // Add to requests array
  requests.push(newRequest)

  // Save to localStorage
  localStorage.setItem("exchangeRequests", JSON.stringify(requests))

  // Show success message
  showNotification(`Exchange request sent to ${studentName}!`)
}

// Show notification message
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = "notification"
  notification.textContent = message

  // Add to body
  document.body.appendChild(notification)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.remove()
  }, 3000)
}

// ============================================
// CONTACT FORM FUNCTIONALITY
// ============================================

function initializeContactPage() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit)
  }
}

function handleContactSubmit(event) {
  event.preventDefault()

  // Get form values
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  // Validate form
  if (validateContactForm(name, email, message)) {
    // Store form data in localStorage
    const formData = {
      name: name,
      email: email,
      message: message,
      submittedDate: new Date().toLocaleString(),
    }

    const submissions = JSON.parse(localStorage.getItem("contactSubmissions")) || []
    submissions.push(formData)
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions))

    // Show success message
    const successMessage = document.getElementById("successMessage")
    successMessage.textContent = "Message sent successfully! We will get back to you soon."
    successMessage.style.display = "block"

    // Reset form
    document.getElementById("contactForm").reset()

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none"
    }, 5000)
  }
}

// Validate contact form
function validateContactForm(name, email, message) {
  let isValid = true

  // Clear previous error messages
  document.getElementById("nameError").textContent = ""
  document.getElementById("emailError").textContent = ""
  document.getElementById("messageError").textContent = ""

  // Validate name
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters"
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address"
    isValid = false
  }

  // Validate message
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters"
    isValid = false
  }

  return isValid
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get all exchange requests from localStorage
function getExchangeRequests() {
  return JSON.parse(localStorage.getItem("exchangeRequests")) || []
}

// Get all contact submissions from localStorage
function getContactSubmissions() {
  return JSON.parse(localStorage.getItem("contactSubmissions")) || []
}

// Clear all data from localStorage (for testing)
function clearAllData() {
  localStorage.removeItem("exchangeRequests")
  localStorage.removeItem("contactSubmissions")
  console.log("All data cleared")
}
