async function buscarUsuarioGitHub(username) {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar usuário: ${response.status}`);
    }

    const dados = await response.json();
    const dadosFiltrados = {
      name: dados.login,
      avatar: dados.avatar_url,
      bio: dados.bio,
    };
    console.log("Dados filtrados:", dados);

    return dadosFiltrados;
  } catch (error) {
    console.error("Erro:", error.message);
    return null;
  }
}

export { buscarUsuarioGitHub };
