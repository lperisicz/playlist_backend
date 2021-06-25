'use strict'

/*
 |--------------------------------------------------------------------------
 | Providers
 |--------------------------------------------------------------------------
 |
 | Providers are building blocks for your Adonis app. Anytime you install
 | a new Adonis specific package, chances are you will register the
 | provider here.
 |
 */
const providers = [
    '@adonisjs/framework/providers/AppProvider',
    '@adonisjs/auth/providers/AuthProvider',
    '@adonisjs/bodyparser/providers/BodyParserProvider',
    '@adonisjs/cors/providers/CorsProvider',
    '@adonisjs/lucid/providers/LucidProvider',
    '@adonisjs/validator/providers/ValidatorProvider',
    '@adonisjs/antl/providers/AntlProvider',
    '@adonisjs/framework/providers/ViewProvider',
    '@adonisjs/mail/providers/MailProvider',
    '@adonisjs/ally/providers/AllyProvider',
    'adonis-cache/providers/CacheProvider',
    'adonis-throttle-requests/providers/ThrottleRequestsProvider',
    '@adonisjs/lucid-slugify/providers/SlugifyProvider',
    'adonis-advanced-serializer'
]

/*
 |--------------------------------------------------------------------------
 | Ace Providers
 |--------------------------------------------------------------------------
 |
 | Ace providers are required only when running ace commands. For example
 | Providers for migrations, tests etc.
 |
 */
const aceProviders = [
    'adonis-cache/providers/CommandsProvider',
    '@adonisjs/lucid/providers/MigrationsProvider',
    '@adonisjs/vow/providers/VowProvider',
]

/*
 |--------------------------------------------------------------------------
 | Aliases
 |--------------------------------------------------------------------------
 |
 | Aliases are short unique names for IoC container bindings. You are free
 | to create your own aliases.
 |
 | For example:
 |   { Route: 'Adonis/Src/Route' }
 |
 */
const aliases = {
    Cache: 'Adonis/Addons/Cache'
}

/*
 |--------------------------------------------------------------------------
 | Commands
 |--------------------------------------------------------------------------
 |
 | Here you store ace commands for your package
 |
 */
const commands = []

module.exports = {providers, aceProviders, aliases, commands}
