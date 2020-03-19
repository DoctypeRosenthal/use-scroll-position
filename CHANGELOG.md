#### 2.1.3 (2020-03-19)

#### 2.1.2 (2020-03-19)

##### Chores

* **release:**
  *  Publish ([f4f3bdab](https://github.com/n8tb1t/use-scroll-position/commit/f4f3bdab674127c40f885b4b368d48160cdf198b))
  *  Publish ([18000d98](https://github.com/n8tb1t/use-scroll-position/commit/18000d98a2a7e00050ff2ec7507f5cf808a54882))
  *  Publish ([08725152](https://github.com/n8tb1t/use-scroll-position/commit/08725152f2740215d80f802e928c6c2489d34e17))
*  improve wording in npm script names ([ef24c94c](https://github.com/n8tb1t/use-scroll-position/commit/ef24c94c5ce0477beb7e2e01c91e51e46db0c114))
*  improve wording in npm script names ([26494a3f](https://github.com/n8tb1t/use-scroll-position/commit/26494a3f7902e86a10715e8f4028711baaee2d12))
*  correct bundle name to allowed pattern ([b8a38c78](https://github.com/n8tb1t/use-scroll-position/commit/b8a38c7843f7e5dfd5c7c6f3cec5f0fa5269c7db))
*  correct version in CHANGELOG ([5df61a22](https://github.com/n8tb1t/use-scroll-position/commit/5df61a2222b7bb65fd23ab60f8addef912e1d416))
*  update README ([7dc75d8e](https://github.com/n8tb1t/use-scroll-position/commit/7dc75d8ef3e1d6cf401a9fd1c6f9e863865a6013))
*  update examples version ([04bab0cf](https://github.com/n8tb1t/use-scroll-position/commit/04bab0cf7ff40b4c8ed2673e2c0a218bf7125045))
*  radd package-lock.json to examples ([7a296eb1](https://github.com/n8tb1t/use-scroll-position/commit/7a296eb1b0a3bb86651b8921ea7c686ef10e2e61))
*  remove package self reference from examples ([263deda4](https://github.com/n8tb1t/use-scroll-position/commit/263deda444c90b263b028b045916f536929c757e))
*  update package prefix everywhere ([1f132a8e](https://github.com/n8tb1t/use-scroll-position/commit/1f132a8ec16259f87b8449b65c027a6ba48f3544))
*  configure gatsby dev server to use sources directly instead of using the package itself as an npm dependency ([e409d4df](https://github.com/n8tb1t/use-scroll-position/commit/e409d4df7e2764428ecb4a9750da9e2f3eff33ea))
*  replace yarn with npm ([971eb0ff](https://github.com/n8tb1t/use-scroll-position/commit/971eb0ff5576b3555f4c574b39c024de8f39d035))

##### Documentation Changes

*  update README ([af78cd69](https://github.com/n8tb1t/use-scroll-position/commit/af78cd69ab31c09b40327755efd127371559b5fd))
*  add downloads. ([c5d538b9](https://github.com/n8tb1t/use-scroll-position/commit/c5d538b981d9521fefd86c37c0024a7a8c17f7b2))

##### Bug Fixes

*  react hooks not being called in deterministic order ([5a0f8d8e](https://github.com/n8tb1t/use-scroll-position/commit/5a0f8d8e7ebbbf02c4842aca3d89d77c19b0887d))

##### Other Changes

*  remove unused import ([89895d65](https://github.com/n8tb1t/use-scroll-position/commit/89895d65dd77ce891164073afccc0efc5d004010))
*  in hook's interface remove the useWindow parameter and move the element parameter to first position. Also various little improvements (useEffect instead of useLayoutEffect, register scroll event listener as passive, use a ref instead of local variable in hook, improve logic in getScrollPosition function in terms of clarity and performance). Also update examples. Sorry too much stuff 😇 ([1edfe6f9](https://github.com/n8tb1t/use-scroll-position/commit/1edfe6f929e006944cba9a9ec769dc4067a6e19b))
*  remove all environment-dependent logic and only export hook when in browser ([1ce941fd](https://github.com/n8tb1t/use-scroll-position/commit/1ce941fd633067613764cbc627b3a94d176b757d))
*  return early when hook is called in a non-browser env ([8f45dffb](https://github.com/n8tb1t/use-scroll-position/commit/8f45dffb1143d552fe41b65a4abd74fee874a613))

##### Code Style Changes

*  remove unnecessary line breaks ([9fd744ac](https://github.com/n8tb1t/use-scroll-position/commit/9fd744aca07ce261185c47b527201356a7930d5a))

#### 2.1.1 (2020-03-19)

##### Chores

*  improve wording in npm script names ([e4253ce9](https://github.com/n8tb1t/use-scroll-position/commit/e4253ce96a576a0b9ff8d482421f4f9f21b7d23b))

#### 2.0.0 (2020-03-19)

##### Chores

*  update examples version ([ec6550e2](https://github.com/n8tb1t/use-scroll-position/commit/ec6550e2650bdfc028a589d24eb9c2230c5aac9c))
*  add package-lock.json to examples ([baf68ba6](https://github.com/n8tb1t/use-scroll-position/commit/baf68ba6f9fae6f49bc42c7c376ef564c4ad85b3))
*  remove package self reference from examples ([81f82d4a](https://github.com/n8tb1t/use-scroll-position/commit/81f82d4ae30227e278ea1f11960ee0e233b5cfe6))
*  update package prefix everywhere ([0e20cf99](https://github.com/n8tb1t/use-scroll-position/commit/0e20cf99df25f1352461ec31823a94d86c8c3875))
*  configure gatsby dev server to use sources directly instead of using the package itself as an npm dependency ([e409d4df](https://github.com/n8tb1t/use-scroll-position/commit/e409d4df7e2764428ecb4a9750da9e2f3eff33ea))
*  replace yarn with npm ([971eb0ff](https://github.com/n8tb1t/use-scroll-position/commit/971eb0ff5576b3555f4c574b39c024de8f39d035))

##### BREAKING CHANGES

*  in hook's interface remove the useWindow parameter and move the element parameter to first position. Also various little improvements (useEffect instead of useLayoutEffect, register scroll event listener as passive, use a ref instead of local variable in hook, improve logic in getScrollPosition function in terms of clarity and performance). Also update examples. Sorry too much stuff O:) ([2569c25b](https://github.com/n8tb1t/use-scroll-position/commit/2569c25bf59e82ec8393138183add67ebd776bfd))

##### Other Changes

*  remove all environment-dependent logic and only export hook when in browser ([1ce941fd](https://github.com/n8tb1t/use-scroll-position/commit/1ce941fd633067613764cbc627b3a94d176b757d))
*  return early when hook is called in a non-browser env ([8f45dffb](https://github.com/n8tb1t/use-scroll-position/commit/8f45dffb1143d552fe41b65a4abd74fee874a613))

#### 1.0.43 (2019-11-20)

##### Bug Fixes

*  change Number types to number ([#11](https://github.com/n8tb1t/use-scroll-position/pull/11)) ([b1936214](https://github.com/n8tb1t/use-scroll-position/commit/b1936214ebb4e0dddb6209b8b9dc930eb9d35394))

#### 1.0.42 (2019-11-08)

##### Bug Fixes

*  update deps ([4f4793aa](https://github.com/n8tb1t/use-scroll-position/commit/4f4793aa049d465c93e40da92b1e3b71dbdc497f))

#### 1.0.41 (2019-11-08)

##### Bug Fixes

*  remove ssr warnings ([01f08034](https://github.com/n8tb1t/use-scroll-position/commit/01f0803483f1847712df48f0bde55753908f8df2))

#### 1.0.40 (2019-10-29)

##### Bug Fixes

*  update deps ([052917c0](https://github.com/n8tb1t/use-scroll-position/commit/052917c0ce2a8b4cd6a349772f68a1d724c642dc))

#### 1.0.39 (2019-10-29)

##### New Features

*  skip listener when no window ([7fafbb2e](https://github.com/n8tb1t/use-scroll-position/commit/7fafbb2e7638f41c340a979a53a0605718413e09))

#### 1.0.38 (2019-09-20)

#### 1.0.37 (2019-09-20)

#### 1.0.36 (2019-09-20)

##### New Features

*  skip listener when no window ([7fafbb2e](https://github.com/n8tb1t/use-scroll-position/commit/7fafbb2e7638f41c340a979a53a0605718413e09))

#### 1.0.35 (2019-07-03)

##### Documentation Changes

*  update screenshot link. ([a1ecef6b](https://github.com/n8tb1t/use-scroll-position/commit/a1ecef6b583546543b9041f0ad77121a4a501f17))

#### 1.0.34 (2019-07-03)

##### Documentation Changes

*  update docs. ([3fe0f3a8](https://github.com/n8tb1t/use-scroll-position/commit/3fe0f3a844cc1bb8b318187ad00151289214b51f))
*  add screenshot. ([cb0a9005](https://github.com/n8tb1t/use-scroll-position/commit/cb0a90056fcdb1e4cb2529ea6001c00610d6ef6a))
*  fix styles. ([06b65c4e](https://github.com/n8tb1t/use-scroll-position/commit/06b65c4e1f0150e7807fa9bd54013cdcc21f7fa5))
*  update examples. ([85cb2f5a](https://github.com/n8tb1t/use-scroll-position/commit/85cb2f5ae29dc4dd57f759044c5e36569e8faa7c))

#### 1.0.33 (2019-07-03)

##### New Features

*  add throttling. ([908a59b3](https://github.com/n8tb1t/use-scroll-position/commit/908a59b3ffbdc02a2e01e8cb1e4d77eab5cacffe))

#### 1.0.32 (2019-06-26)

##### Documentation Changes

*  update docs [#1](https://github.com/n8tb1t/use-scroll-position/pull/1) ([a58fb4fd](https://github.com/n8tb1t/use-scroll-position/commit/a58fb4fdf6c0eeefdac757899c2e2d78775823e6))
*  refactoring examples ([b804af6e](https://github.com/n8tb1t/use-scroll-position/commit/b804af6e5f3b94c7cd1b59864c4b85dc527a1866))

##### New Features

*  add element and useWindow ([3e4c0950](https://github.com/n8tb1t/use-scroll-position/commit/3e4c0950e98bcf96f2b0dcba402ba16439d702ad))

#### 1.0.31 (2019-06-25)

##### Documentation Changes

*  Add codesandbox examples [#1](https://github.com/n8tb1t/use-scroll-position/pull/1) ([a7a8ec73](https://github.com/n8tb1t/use-scroll-position/commit/a7a8ec73261ecdd44cf9e4e3487019e689d32b34))

#### 1.0.30 (2019-06-25)

##### Chores

*  Add react example ([cf28ea46](https://github.com/n8tb1t/use-scroll-position/commit/cf28ea465b2f25d8f763ae0252eb19684c5022f5))

##### Documentation Changes

*  Add live example ([a7f2adc0](https://github.com/n8tb1t/use-scroll-position/commit/a7f2adc09171a7f63169741a1aed8d4becf19b56))

##### New Features

*  Add path prefix ([26931dce](https://github.com/n8tb1t/use-scroll-position/commit/26931dce7b87fa11c008cae4bbe9acbadfcf8152))

#### 1.0.29 (2019-06-24)

##### Documentation Changes

*  Add more examples ([d90f30fd](https://github.com/n8tb1t/use-scroll-position/commit/d90f30fdfe0654489a665f14f571e11deca8239d))

#### 1.0.28 (2019-06-23)

##### Documentation Changes

*  Add examples [#1](https://github.com/n8tb1t/use-scroll-position/pull/1) ([bd42b3b2](https://github.com/n8tb1t/use-scroll-position/commit/bd42b3b21c959172edc086eb7894b424ce6e0187))

#### 1.0.27 (2019-06-23)

#### 1.0.26 (2019-06-23)

##### New Features

*  Add types ([0e4d71aa](https://github.com/n8tb1t/use-scroll-position/commit/0e4d71aad0e600a91b7ae3f14340c1700efe6682))

##### Refactors

*  Clean source ([695c4005](https://github.com/n8tb1t/use-scroll-position/commit/695c4005d3bcae9aae207a729f78fcaf63782bd0))



