import { SpaceIdCore } from "@tatumio/space-id-core";
import { TatumSDK, Network, Ethereum } from "@tatumio/tatum";

const getAddress = async (name: string) => {
    const tatum = await TatumSDK.init<Ethereum>({
        network: Network.ETHEREUM,
        apiKey: {
            v4: "t-66f69cc025836271c5a5c5f2-f9a2cfe0bfa64a1fb63985ca",
        },
        quiet: true,
        configureExtensions: [SpaceIdCore],
    });

    try {
        const result = await tatum
            .extension(SpaceIdCore)
            .getAddress(name);
        console.log(result);
    } catch (e) {
        console.error(e);
    }

    tatum.destroy();
};

getAddress(process.argv[2]);