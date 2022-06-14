import config from 'eslint-config-standard/.eslintrc.json'
import type { Linter } from 'eslint'

export = config as any as Linter.Config
