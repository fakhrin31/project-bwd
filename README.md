Tentu, ini adalah `README.md` yang diperbarui dengan tambahan struktur folder untuk proyek toko online Anda, disajikan dalam bahasa Inggris:

-----

# IS Store: Easy Shopping, Low Price

This project is a modern and responsive online store built using HTML, CSS, and JavaScript. It features a dynamic product catalog fetched from a public API, a smooth user interface, and an intuitive navigation system.

-----

## Features

  * **Responsive Navigation Bar:** A sticky header that adapts on scroll, with a hamburger menu for mobile views.
  * **Dynamic Hero Section:** Engaging "Easy Shopping, Low Price" slogan and store introduction with subtle animations.
  * **About Us Section:** Provides information about the store's concept, design, and commitment to product quality and service.
  * **Product Catalog:**
      * **Search Functionality:** Filter products instantly by typing in the search bar.
      * **Sorting Options:** Sort products by name in ascending (A-Z) or descending (Z-A) order.
      * **Product Details Modal:** View comprehensive details of each product in a pop-up modal.
  * **External API Integration:** Fetches product data from `dummyjson.com`.
  * **Smooth Scrolling:** Navigates smoothly to different sections of the page.
  * **Animations:** Utilizes CSS animations for a more engaging user experience (e.g., `fadeInUp`).

-----

## Technologies Used

  * **HTML5:** Structure of the web pages.
  * **CSS3:** Styling and responsiveness, including media queries for different screen sizes.
  * **JavaScript:** Interactivity, DOM manipulation, API fetching, search, and sorting functionalities.
  * **Font Awesome:** Icons (e.g., sort icon, star rating).
  * **Google Fonts (Poppins):** For consistent typography.

-----

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

You only need a web browser to open the `index.html` file. No server-side setup is required as it's a static frontend project that fetches data from a public API.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/is-store.git
    cd is-store
    ```

    *(Replace `your-username/is-store` with the actual path to your repository if you have one.)*

2.  **Open the `index.html` file:**
    Navigate to the project directory and open the `index.html` file directly in your web browser.

    ```bash
    # Example for Linux/macOS
    open index.html

    # Example for Windows
    start index.html
    ```

-----

## Folder Structure

Here's an overview of the project's folder structure:

```
is-store/
├── assets/
│   ├── css/
│   │   └── style.css      # All custom CSS styles
│   ├── img/
│   │   ├── shopping.jpg   # Image for the main hero section
│   │   └── front-store.jpg# Image for the About Us section
│   └── js/
│       └── script.js      # All JavaScript functionalities
├── index.html             # Main HTML file for the store front
└── README.md              # This README file
```

-----

## Usage

  * **Navigation:** Click on the links in the navigation bar to jump to different sections (`Home`, `About Us`, `Catalog`, `Contact`). On smaller screens, click the hamburger icon to reveal the navigation links.
  * **Product Search:** Type keywords into the "Type to search product" input field to filter products.
  * **Product Sorting:** Click the sort button (\<i class="fa-solid fa-sort"\>\</i\>) and choose "Sort by Name: A-Z" or "Sort by Name: Z-A" to reorder the product list.
  * **View Product Details:** Click the "Detail" button on any product card to see more information in a pop-up modal. Click the "x" button or outside the modal to close it.

-----

## API Reference

This project uses the following public API to fetch product data:

  * **DummyJSON Products API:** `https://dummyjson.com/products`
  * **Single Product Details:** `https://dummyjson.com/products/{id}`

-----

## Contributing

Contributions are welcome\! If you have suggestions for improvements, feature requests, or find any bugs, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

-----

## License

This project is open source and available under the MIT License.
