const yargs = require('yargs');
const { execSync } = require('child_process');

yargs
  .command(
    'release <version>',
    'Create a new release',
    {},
    (argv) => {
      const version = argv.version;
      const releaseBranch = `release/v${version}`;

      // Step 1: Make PR of your release branch into develop
      // ... code for creating PR ...

      // Step 2: Gain approval and merge your PR into develop
      // ... code for merging PR ...

      // Step 3: Checkout develop branch
      execSync('git checkout develop');

      // Step 4: Pull down any recent additions to develop branch
      execSync('git pull');

      // Step 5: Run QA on the develop branch deployment
      // ... code for QA ...

      // Step 6: Create a new release branch off develop
      execSync(`git checkout -b ${releaseBranch}`);

      // Step 7: Bump version of release accordingly in the package.json
      execSync(`npm version ${version} --no-git-tag-version`);

      // Step 8: git add and commit the version bump
      execSync('git add .');
      execSync(`git commit -m 'bump version v${version}'`);

      // Step 9: Checkout the main branch
      execSync('git checkout main');

      // Step 10: Merge the release branch into the main branch
      execSync(`git merge --no-ff ${releaseBranch}`);

      // Step 11: Create a signed tag for the release
      execSync(`git tag -s -a v${version} -m 'Release v${version}'`);

      // Step 12: Push the changes to GitHub
      execSync('git push');
      execSync('git push --tags');

      // Step 13: Run QA on the main deployment
      // ... code for QA ...

      // Step 14: Merge the release branch back into develop
      execSync('git checkout develop');
      execSync(`git merge --no-ff ${releaseBranch}`);
      execSync('git push');

      // Step 15: In GitHub, create a release from the tag
      // ... code for creating GitHub release ...

      // Step 16: Mark your ticket done in Jira
      // ... code for marking Jira ticket as done ...
    }
  )
  .command(
    'hotfix <version>',
    'Create a hotfix release',
    {},
    (argv) => {
      const version = argv.version;
      const hotfixBranch = `hotfix/v${version}`;

      // Step 1: Create a new hotfix branch off main
      execSync(`git checkout -b ${hotfixBranch}`);

      // Step 2: Fix the issue

      // Step 3: Bump version
      execSync(`npm version patch --no-git-tag-version`);

      // Step 4: git add and commit the version bump
      execSync('git add .');
      execSync(`git commit -m 'bump version v${version}'`);

      // Step 5: Create a PR

      // Step 6: On approval, merge the hotfix branch into main
      execSync('git checkout main');
      execSync(`git merge --no-ff ${hotfixBranch}`);

      // Step 7: Create a signed tag for the hotfix release
      execSync(`git tag -s -a v${version} -m 'Hotfix v${version}'`);

      // Step 8: Push the changes to GitHub
      execSync('git push');
      execSync('git push --tags');

      // Step 9: Merge the hotfix branch back into develop
      execSync('git checkout develop');
      execSync(`git merge --no-ff ${hotfixBranch}`);
      execSync('git push');
    }
  )
  .demandCommand()
  .help().argv;
