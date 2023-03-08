module.exports = {
  "customTypes": {
    "engines": {
      "path": "engines",
      "strategy": "versionsByName"
    },
    "packageManager": {
      "path": "packageManager",
      "strategy": "name@version"
    }
  },
  "dependencyTypes": ["dev", "prod", "peer"],
  "filter": ".",
  "indent": "  ",
  "semverRange": "",
  "semverGroups": [
    {
      "range": "",
      "label": "apps",
      "dependencyTypes": ["dev", "prod"],
      "dependencies": ["**"],
      "packages": ["*-app"]
    },
    {
      "range": "^",
      "label": "publishable-packages",
      "dependencyTypes": ["peer", "prod"],
      "dependencies": ["**"],
      "packages": ["@sbjang123456/*"]
    },
  ],
  "sortAz": [
    "contributors",
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "resolutions"
  ],
  "sortFirst": ["name",  "version",  "private", "sideEffects", "type", "main", "exports", "description", "keywords", "author", "license", "homepage", "repository", "scripts"],
  "source": ["apps/**", "packages/**", "./package.json"],
  "versionGroups": []
}