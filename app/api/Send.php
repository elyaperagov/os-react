<?

class Send
{
  const EMAIL = 'visionforlife.ru@mail.ru';
  const REQUIRED = ['name', 'email', 'message', 'price'];

  public static function createMessage($data)
  {
    return "Name: " . htmlspecialchars($data['name']) . "\nE-mail: " . htmlspecialchars($data['email']) . "\nMessage: " . htmlspecialchars($data['message'])  . "\nPrice: " . htmlspecialchars($data['price']);
  }

  public static function sendMail()
  {
    self::validate();

    $to = self::EMAIL;
    $message = self::createMessage($_POST);
    $subject = "Новый заказ с osprojectvint.ru";
    $headers = "From: " . self::EMAIL;

    mail($to, $subject, $message, $headers);
  }

  public static function validate()
  {
    $errors = [];
    foreach (self::REQUIRED as $key => $field) {
      if (!key_exists($field, $_POST)) {
        $errors[] = "$field required";
      }
    }
    if ($errors) {
      self::showError(implode("\n", $errors));
    }
  }

  public static function showError($message)
  {
    http_response_code(400);

    header('Content-Type: application/json');
    echo json_encode(['message' => $message]);

    exit;
  }
}
