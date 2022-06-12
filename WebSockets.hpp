int estado = 0;
int contador =0;

String GetMillis()
{
  estado = digitalRead(5);
  Serial.println(estado);
  if (estado == 1) {
    delay(180);
    contador++;
    Serial.print("contador:"); Serial.println(contador);
    String contador = (String) contador;
  }
  return String(contador, DEC);
}

String ProcessRequest()
{
  return GetMillis();
}
