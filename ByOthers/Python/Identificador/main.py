import cv2
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input, decode_predictions

# Carregar o modelo treinado
model_path = 'caminho/para/seu/modelo.h5'  # Substitua pelo caminho do seu modelo
model = load_model(model_path)

# Iniciar a câmera
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()

    # Pré-processamento da imagem para o modelo de classificação
    img = cv2.resize(frame, (224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = preprocess_input(img)

    # Fazer a previsão
    predictions = model.predict(img)
    label = decode_predictions(predictions)

    # Desenhar a previsão na imagem
    cv2.putText(frame, f'Objeto: {label[0][0][1]}', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Mostrar o quadro resultante
    cv2.imshow('Objeto Reconhecido', frame)

    # Sair do loop se a tecla 'q' for pressionada
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Liberar os recursos
cap.release()
cv2.destroyAllWindows()
