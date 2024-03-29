# Contribution Guidelines

Thank you for considering contributing to DogDB! Here are the steps you need to follow to contribute effectively.

## Getting Started

1.  **Clone the Repository**

    To contribute to the project, first clone the repository to your local machine using:

    ```bash
       git clone https://github.com/dogdb-org/dogdb-frontend.git
    ```

2.  **Create a Branch**

    Before making your changes, create a new branch based on the issue you are working on.

    Follow our branch naming convention, which categorizes branches by the component or view they relate to, for example: `header/navigation`, `header/dark-mode-toggle`.

    To create and switch to a new branch:

    ```bash
    git checkout -b [your-branch-name]
    ```

## Making Changes

1. **Complete the Ticket/Issue Requirements**

    Ensure you fully understand the ticket/issue requirements before starting work. Ask questions in the Discord if you are unsure.

    Complete all the necessary tasks as outlined in the ticket.

2. **Run Format and Tests**

    Before committing your changes, run the following command and make sure you have checked the browser console and Node console running the Next app for any errors.

    Ensure you correct any errors and fix or highlight warnings in your PR.

    ```bash
       # Run formatting
       npm run build
    ```

This will run the formatter on all the code, test the code and then build it.

If the build is successfull and you have corrected any issues, please proceed.

3. **Merge Your Branch with Main**

    Before creating a pull request, merge your branch with the main branch locally to resolve any potential conflicts:

    ```bash
    git checkout main
    git pull origin main
    git checkout [your-branch-name]
    git merge main
    ```

    Resolve any conflicts that arise and ensure your feature is working as expected with the latest version of the main branch.

## Submitting Your Contribution

1. **Create a Pull Request (PR)**

    Push your branch to the repository and create a pull request against the main branch. Provide a clear description of the changes and reference the issue/ticket number.

    ```bash
    git push origin [your-branch-name]
    ```

2. **Request a Review**

    Request a review from the project maintainers or a specific team member to ensure your changes meet the project's quality standards.

3. **Address Feedback**

    If the reviewers provide feedback, make the necessary adjustments and update your PR. Keep the conversation within the PR if you need clarification or further discussion.

4. **Merge**

    Once your PR is approved and passes all the checks, a project maintainer will merge it into the main branch. Your contribution will now be part of the project!

Thank you for contributing to the DogDB project!
