document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      // Exemplo de endpoint (mude depois para o seu)
      const apiUrl = "https://suaapi.com/api/login";
  
      const data = { username, password };
  
      try {
        // Simulação de chamada de API (remova depois)
        console.log("Enviando dados para API:", data);
  
        // Descomente quando a API estiver disponível:
        /*
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert("Login realizado com sucesso!");
          window.location.href = "home.html";
        } else {
          alert(result.message || "Usuário ou senha incorretos.");
        }
        */
      } catch (error) {
        console.error("Erro ao tentar logar:", error);
        alert("Erro de conexão com o servidor.");
      }
    });
  });
  