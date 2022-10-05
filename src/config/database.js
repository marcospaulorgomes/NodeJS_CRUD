module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'docker',
    password: 'docker',
    database: 'nodejscrud',
    define: {
        timestamps: true, // Toda tabela do DB possui regristro de criação e atualização
        underscored: true, // Nome das tabelas e colunas do DB seguindo a formatação SnakeCase (default: PascalCase)
    },
};