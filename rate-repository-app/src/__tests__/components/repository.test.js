import { render, screen, within } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
  

        render(<RepositoryListContainer repositories={repositories} />)
        screen.debug()
        const repositoryItems = screen.getAllByTestId('repositoryItem')
        expect(repositoryItems).toBeDefined()
        expect(repositoryItems).toHaveLength(2)
        
        // assumes that repositories will appear in the same order as they do in the data passed in
        // may need refactoring
        for(let i=0; i<repositories.length; i++){
            const displayedRepository = repositoryItems[i]
            const {fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount} = repositories.edges[i].node

            expect(within(displayedRepository).getByText(fullName)).toBeDefined()
            expect(within(displayedRepository).getByText(description)).toBeDefined()
            expect(within(displayedRepository).getByText(language)).toBeDefined()
            expect(within(displayedRepository).getByText(forksCount)).toBeDefined()
            expect(within(displayedRepository).getByText(stargazersCount)).toBeDefined()
            expect(within(displayedRepository).getByText(ratingAverage)).toBeDefined()
            expect(within(displayedRepository).getByText(reviewCount)).toBeDefined()
        }
      });
    });
  });
