import React from "react";
import styles from "./Produto.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Produto = () => {
  const { id } = useParams();

  const [fetchProduto, setFetchProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProdutoUnico = (url) => {
      setLoading(true);
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setFetchProduto(json);
        })
        .catch(() => setError("Erro ao carregar arquivos."))
        .finally(setLoading(false));
    };
    fetchProdutoUnico(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);
  if (loading) return <div className={loading}></div>;
  if (error) <p>{error}</p>;
  if (fetchProduto === null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${id}`}
        description={`Ranek | Esse é um produto: ${id}`}
      />
      <div>
        {fetchProduto.fotos.map((foto, index) => (
          <img key={index} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{fetchProduto.nome}</h1>
        <span className={styles.preco}>R$ {fetchProduto.preco}</span>
        <p className={styles.descricao}>{fetchProduto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
