<?

class Send
{
  const EMAIL = 'piragof@gmail.com';
  const REQUIRED = ['name', 'email', 'message'];

  public static function createMessage($data)
  {
    return "Name: " . htmlspecialchars($data['name']) . "\nE-mail: " . htmlspecialchars($data['email']) . "\nMessage: " . htmlspecialchars($data['message']);
  }

  public static function sendMail()
  {
    self::validate();

    $to = self::EMAIL;
    $message = self::createMessage($_POST);
    $subject = "Complete form on formal crypto website";
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
