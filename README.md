# devstore

This document serves as a comprehensive guide for the Devstore project, developed to apply advanced web development concepts with a focus on Next.js and React.

## Benefits of Using Server Components with Next.js and App Router

Using Server Components with Next.js and the App Router offers several significant advantages:

1. **Reduced Client-Side JavaScript**: Server Components allow more logic to be processed on the server, resulting in less JavaScript being sent to the client. This improves initial load time and overall application performance, providing a better user experience.

2. **Faster Rendering**: With more processing happening on the server, pages can be generated and sent to the client more quickly. This is especially beneficial for users with slower internet connections or less powerful devices.

3. **Improved Security**: Processing more logic on the server reduces the exposure of code and sensitive data on the client, increasing application security.

4. **Enhanced SEO**: Server-side rendering improves page indexing by search engines, resulting in better SEO and application visibility.

5. **Simplified State Management**: Server Components can simplify state management, as there is no need to synchronize state between the client and server. This makes development more efficient and the code easier to maintain.

6. **Progressive Loading**: The ability to progressively load data enhances the user experience, as parts of the page can be displayed while others are still loading.

## Project Focus

This project aims to apply advanced web development concepts by building a simple application that addresses the following topics:

- **Routing and Layouts**: Implementation of routes and layouts using Next.js.
- **Next.js Architecture with App Router**: Using the App Router to manage navigation.
- **React Server Components**: Use of React server components.
- **Data Fetching in Components**: Fetching data directly in components.
- **Loading and Streaming SSR**: Implementing loading and streaming in server-side rendering.
- **Client Component Abstraction**: Clear separation between client and server components.
- **Client Boundaries and Composition**: Using client boundaries to manage components.
- **Component Tree in Next.js**: Structuring the component tree.
- **Suspense API in React**: Utilizing the Suspense API in React.
- **E2E Testing with Cypress**: End-to-end testing using Cypress.
- **Static Generation at Build**: Building static pages during the build process.
- **Caching and Memoization**: Implementing caching and memoization techniques.
- **Page Metadata in Next.js (SEO)**: Configuring metadata for search engine optimization.
- **Cart Context**: Managing the state of the shopping cart using Context API.
- **API: Product Search**: Implementing APIs for product search.
- **Favicon Configuration**: Customizing the application favicon.
- **Application Deployment Adjustments**: Specific configurations for deployment.
- **Environment Variables: Client and Server**: Managing environment variables for client and server.
- **CI Workflow with Cypress**: Continuous integration using Cypress for E2E tests.

## Preview

![](./public/devstore.gif)

## Application Features

Devstore is an application with a front-end similar to an e-commerce platform. It explores certain workflows for listing featured products, filtering products, and adding products to the cart. The application has the following features:

### Home Page

- **Featured Products Listing**: The home page displays a selection of featured products, making it easy for users to access popular or promotional items.

### Search Bar (Header)

- **Search Input Component**: In the header, there is an input component where the user can type the name of the product they want to find.
- **Redirection to Search Results Page**: Upon submitting the search form, the user is redirected to a page that lists only the products matching the search term. This is done using Next.js routing to update the URL and dynamically load the search results.

### Product Details Page

- **Product Details Display**: When clicking on a product on the home page or in the search results, the user is redirected to a product details page. This page displays detailed information such as title, description, price, and size options.
- **OpenGraph Image Generation**: For each product, a specific image is generated to be used in OpenGraph, improving social media sharing. This image is dynamically rendered based on the product data, ensuring that each shared link has a rich and specific visualization.

### Add to Cart

- **Add to Cart Component**: On the product details page, clicking the "Add to Cart" button adds the product to the shopping cart, and the cart item count is updated in real time.
- **Cart Widget in the Header**: In the header, there is a widget that displays the number of items in the cart, allowing the user to quickly see how many products have been added.

### Global Cart State

- **Cart State Management**: The shopping cart state is managed using the React Context API, allowing different parts of the application to access and update the cart consistently and efficiently.

These features demonstrate how the Devstore application uses Next.js and React to create a smooth and interactive user experience, with dynamic routing, server-side data rendering, and efficient state management.

## Project Structure

Based on the provided folder structure:

```
app
├── (store)
│ ├── layout.tsx
│ ├── (home)
│ │ ├── product
│ │ │ ├── [slug]
│ │ │ │ ├── opengraph-image.tsx
│ │ │ │ ├── page.tsx
│ │ ├── loading.tsx
│ │ ├── page.tsx
│ ├── search
│ │ ├── loading.tsx
│ │ ├── page.tsx
```

#### Explanation of Folders and Files

- **app**: Root folder of the application.

- **(store)**: Contains the main layout of the store. This folder groups all routes and components related to the store without impacting the URL.

  - **layout.tsx**: Defines the main layout for the store section. This file is responsible for wrapping and providing a consistent structure for all routes within `(store)`.

- **(home)**: Represents the home page of the store.

  - **product**: Contains the logic and components related to products.
    - **[slug]**: Dynamic folder that handles dynamic routes for different products. The `[slug]` allows dynamic URLs such as `/product/moletom-never-stop-learning`.
      - **opengraph-image.tsx**: Generates dynamic images for OpenGraph, enhancing SEO and presentation on social media.
      - **page.tsx**: Main file for rendering the product detail page.
  - **loading.tsx**: Displays a loading state while the home page data is being fetched.
  - **page.tsx**: Renders the content of the home page (`/`).

- **search**: Contains the logic and components related to the search functionality.
  - **loading.tsx**: Displays a loading state while the search results are being fetched.
  - **page.tsx**: Renders the search results page, displaying products that match the search term.

This structure leverages the capabilities of Next.js with App Router, ensuring that the application is modular, scalable, and easy to navigate.

## Technologies Used

- **Next.js**: Framework for React that enables server-side rendering for web applications.
- **React**: JavaScript library for building user interfaces.
- **Cypress**: End-to-end testing tool.
- **TailwindCSS**: Utility-first CSS framework for rapid styling.

## How to Run the Project

1. Clone this repository:

```bash
git clone https://github.com/mateussp97/devstore.git
```

2. Navigate to the project directory:

```bash
cd devstore
```

3. Create an `.env.local` file in the project root and add the following values:

```bash
NEXT_PUBLIC_API_BASE_URL='https://ignite-devstore-api.vercel.app'
APP_URL='http://localhost:3000'
```

4. Navigate to the project directory:

```bash
pnpm install
```

5. Start the development:

```bash
pnpm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

7. (Optional) Running E2E Tests:

```bash
npx cypress run
```
