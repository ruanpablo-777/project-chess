# Exemplo prático: Agente que planeja um caminho em um labirinto usando algoritmo A* (A estrela)
# Vamos criar um grid simples onde 0 = caminho livre e 1 = obstáculo

import heapq

# Representação do ambiente (labirinto)
labirinto = [
    [0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
]

inicio = (0, 0)  # posição inicial
meta = (4, 4)    # objetivo final

# Função heurística (distância de Manhattan)
def heuristica(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

# Algoritmo A*
def a_star(labirinto, inicio, meta):
    linhas, colunas = len(labirinto), len(labirinto[0])
    vizinhos = [(0,1),(0,-1),(1,0),(-1,0)]
    fila = [(0 + heuristica(inicio, meta), 0, inicio, [])]
    visitados = set()

    while fila:
        _, custo, atual, caminho = heapq.heappop(fila)
        if atual in visitados:
            continue
        visitados.add(atual)
        caminho = caminho + [atual]

        if atual == meta:
            return caminho  # Caminho encontrado

        for dx, dy in vizinhos:
            x2, y2 = atual[0] + dx, atual[1] + dy
            if 0 <= x2 < linhas and 0 <= y2 < colunas and labirinto[x2][y2] == 0:
                novo_custo = custo + 1
                prioridade = novo_custo + heuristica((x2, y2), meta)
                heapq.heappush(fila, (prioridade, novo_custo, (x2, y2), caminho))
    return None

caminho_encontrado = a_star(labirinto, inicio, meta)
caminho_encontrado
