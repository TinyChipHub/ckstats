
class ECashValidator {
  private static readonly CASHADDR_REGEX = /^(bitcoincash|ecash):[pq][a-z0-9]{41}$/i;
  private static readonly LEGACY_REGEX = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;

  public static validate(address: string): boolean {
    return this.CASHADDR_REGEX.test(address) || this.LEGACY_REGEX.test(address);
  }
}

export function validateBitcoinAddress(address: string): boolean {
  return ECashValidator.validate(address);
}


